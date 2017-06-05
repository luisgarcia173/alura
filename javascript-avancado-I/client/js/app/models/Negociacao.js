// Classe modelo de Negociacao
class Negociacao {

    // Regra Negociacao imutavel
    constructor(data, quantidade, valor) {
        /* Convencao programacao (_) underscore atributo imutavel */
        this._data = new Date(data.getTime()); // blinda atributo 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Torna objeto imutavel (shallow)
    }

    // Metodos Get
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime()); // Sempre retornara a copia e nao o objeto original
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }

}