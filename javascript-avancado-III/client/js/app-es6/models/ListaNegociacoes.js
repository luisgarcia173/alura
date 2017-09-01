// Classe responsavel pela lista de negociacoes
export class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // Blindando lista, tornar imutavel
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

}