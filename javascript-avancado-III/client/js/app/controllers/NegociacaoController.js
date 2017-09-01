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

        this._init();
    }

    _init() {
        // Load inicial da tabela
        ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.listaTodos())
        .then(negociacoes => 
            negociacoes.forEach(negociacao => 
                this._listaNegociacoes.adiciona(negociacao)))
        .catch(erro => {
            console.log(erro);
            this._mensagem.texto = error;
        });
    }

    // Metodos
    adiciona(event) {
        
        event.preventDefault();
        ConnectionFactory
            .getConnection()
            .then(connection => {
                let negociacao = this._criaNegociacao();
                new NegociacaoDao(connection)
                    .adiciona(negociacao)
                    .then(() => {
                        this._listaNegociacoes.adiciona(negociacao);
                        this._mensagem.texto = 'Negociação adicionada com sucesso!';
                        this._limpaFormulario();
                    });
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    importa() {
        let service = new NegociacaoService();

        service
            .obterNegociacoes()
            /*.then(negociacoes => {
                negociacoes.filter(negociacao => 
                    !this._listaNegociacoes.negociacoes.some(negociacaoExistente =>
                        JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
            })*/
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'   
            }))
            .catch(erro => this._mensagem.texto = erro);  
    }

    apaga() {
        ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();
            })
            .catch(erro => this._mensagem.texto = erro);
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