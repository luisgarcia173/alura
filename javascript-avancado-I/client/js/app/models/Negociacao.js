// Classe modelo de Negociacao
class Negociacao {

    /* Classe anemica: dados sem comportamento */

    // Construtor padrão
    constructor() {
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }

    // Construtor com campos
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

}