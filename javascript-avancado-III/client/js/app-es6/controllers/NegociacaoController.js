import {ListaNegociacoes} from '../models/ListaNegociacoes';
import {Mensagem} from '../models/Mensagem';
import {Negociacao} from '../models/Negociacao';
import {NegociacoesView} from '../views/NegociacoesView';
import {MensagemView} from '../views/MensagemView';
import {NegociacaoService} from '../services/NegociacaoService';
import {DateHelper} from '../helpers/DateHelper';
import {Bind} from '../helpers/Bind';

// Classe controller de Negociacao (acoes tela)
class NegociacaoController {

    // Construtor
    constructor() {
        // Recupera dados do form somente uma vez (performatico)
        let $ = document.querySelector.bind(document); // Copiando jQuery

        // Form
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // Tabela
        this._ordemAtual = ''; // Ordenacao colunas
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
        );

        // Notificacoes
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );

        this._service = new NegociacaoService();
        // Chama funcoes configuracao
        this._init();
    }

    _init() {
        // Load inicial da tabela
        this._service
            .lista()
            .then(negociacoes => 
                negociacoes.forEach(negociacao => 
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(erro => this._mensagem.texto = erro);

        // Importa negociacoes a cada 3 seg
        setInterval(() => {
            this._importaNegociacoes();
        }, 3000);
    }

    // Metodos
    adiciona(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();
        this._service
            .cadastra(negociacao)
            .then(mensagem => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = mensagem;
                this._limpaFormulario();
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    _importaNegociacoes() {
        this._service
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'   
            }))
            .catch(erro => this._mensagem.texto = erro);  
    }

    apaga() {
        this._service
            .apaga()
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();
            })
            .catch(erro => this._mensagem.texto = erro);;
    }

    ordena(coluna) {
        this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

    // Convencao pra dizer que somente a classe pode utilizar este metodo
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    // Convencao pra dizer que somente a classe pode utilizar este metodo
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}

// Pattern: Singleton
let negociacaoController = new NegociacaoController();
export function currentInstance() {
    return negociacaoController;
}