// Classe de interface de servicos para Negociacoes
class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        // Implementando (DesignPattern: Promise)
        return new Promise((resolve, reject) => {
            // Utiliza classe HttpService
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                   resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociaçōes da semana.');
                });
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        // Implementando (DesignPattern: Promise)
        return new Promise((resolve, reject) => {
            // Utiliza classe HttpService
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociaçōes da semana anterior.');
                });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        // Implementando (DesignPattern: Promise)
        return new Promise((resolve, reject) => {
            // Utiliza classe HttpService
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociaçōes da semana retrasada.');
                });
        });
    }

}