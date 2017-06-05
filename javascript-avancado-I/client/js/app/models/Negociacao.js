// Classe modelo de Negociacao
class Negociacao {

    // Regra Negociacao imutavel
    constructor(data, quantidade, valor) {
        /* Convencao programacao (_) underscore atributo imutavel */
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Metodos Get & Set
    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

}