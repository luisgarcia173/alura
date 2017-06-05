// Classe controller de Negociacao (acoes tela)
class NegociacaoController {

    // Construtor
    construct() {
        // Recupera dados do form somente uma vez (performatico)
        let $ = document.querySelector.bind(document); // Copiando jQuery
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    // Metodos
    adiciona(event) {
        event.preventDefault(); // Previne reload tela
        
        // Conversao data 1
        // let data = new Date(this._inputData.value.replace(/-/g, ','));
        
        // Conversao data 2
        /*let data = new Date(
            this._inputData.value
                .split('-')
                .map(function(item, indice) {
                    return item - indice % 2;
                })
        );*/

        // Conversao data 3 - Arrow function
        let dataConvertida = new Date(
            this._inputData.value // String
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        // Instancia do modelo
        let negociacao = new Negociacao(
            dataConvertida,
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

}