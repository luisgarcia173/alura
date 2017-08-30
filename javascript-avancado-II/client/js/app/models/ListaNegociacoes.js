// Classe responsavel pela lista de negociacoes
class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        // Blindando lista, tornar imutavel
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

}