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
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona', 'esvazia']
        );

        // Notificacoes
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']
        );
    }

    // Metodos
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._limpaFormulario();
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