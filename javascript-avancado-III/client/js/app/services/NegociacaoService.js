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

    obterNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));

            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });
    }
    
    cadastra(negociacao) {
        return new Promise((resolve, reject) => {
            ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => dao.adiciona(negociacao))
                .then(() => resolve('Negociação adicionada com sucesso!'))
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível adicionar a Negociação!')
                });
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => resolve(dao.listaTodos()))
                .catch(erro => {
                    console.log(erro);
                    reject(erro);
                });
        });
    }

    apaga() {
        return new Promise((resolve, reject) => {
            ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => resolve(dao.apagaTodos()))
                .catch(erro => {
                    console.log(erro);
                    reject(erro);
                });
        });
    }

    importa(listaAtual) {
        return this.obterNegociacoes()
                // Logica para evitar deplicados
                .then(negociacoes => 
                    negociacoes.filter(negociacao => 
                        !listaAtual.some(negociacaoExistente => 
                            JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
                )
                .catch(erro => {
                    console.log(erro);
                    throw new Error(erro);
                });
    }

}