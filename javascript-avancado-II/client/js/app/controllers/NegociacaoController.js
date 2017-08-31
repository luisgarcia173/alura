// Classe controller de Negociacao (acoes tela)
class NegociacaoController {

    // Construtor
    constructor() {
        // Recupera dados do form somente uma vez (performatico)
        let $ = document.querySelector.bind(document); // Copiando jQuery

        // Form
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        // Tabela
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacoesView")),
            'adiciona', 'esvazia'
        );

        // Notificacoes
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            'texto'
        );
    }

    // Metodos
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._limpaFormulario();
    }

    importa() {
        // Abre objeto ajax 
        let xhr = new XMLHttpRequest();
        xhr.open("GET", 'negociacoes/semana');

        // Configuracao
        xhr.onreadystatechange = () => {
            /*
            0: requisicao nao iniciada
            1: conexao estabelecida
            2: requisicao recebida
            3: processando requisicao
            4: requisicao concluida
            */
            if (xhr.readyState == 4) {
                if (xhr.status == 200) { // HTTP code de sucesso
                    // Parse json do array
                    JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = "Importação das negociaçōes realizada com sucesso!"
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = "Não foi possível obter as negociaçōes da semana."
                }
            }
        };

        // Request servico
        xhr.send();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso!";
    }

    // Convencao pra dizer que somente a classe pode utilizar este metodo
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    // Convencao pra dizer que somente a classe pode utilizar este metodo
    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}