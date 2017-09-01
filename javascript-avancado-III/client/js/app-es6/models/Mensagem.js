// Classe repsonsavel pelo conteudo da mensagem exibida em tela
export class Mensagem {

    // Construtor com valor padrao caso nenhum valor seja passado
    constructor(texto='') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }

}