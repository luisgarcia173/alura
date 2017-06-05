// Classe controller de Negociacao (acoes tela)
class NegociacaoController {

    // Construtor
    constructor() {
        // Recupera dados do form somente uma vez (performatico)
        let $ = document.querySelector.bind(document); // Copiando jQuery
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    // Metodos
    adiciona(event) {
        event.preventDefault(); // Previne reload tela

        // DateHelper
        let helper = new DateHelper();

        console.log(this);

        // Instancia do modelo
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));

    }

}