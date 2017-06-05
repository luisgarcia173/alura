// Classe modelo de Negociacao
class Negociacao {

    // Regra Negociacao imutavel
    constructor(data, quantidade, valor) {
        /* Convencao programacao (_) underscore atributo imutavel */
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Metodos Get
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }

}