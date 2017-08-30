// Classe de bind de objeto tornando Proxy mais flexivel
class Bind {
        
    /*
    ProxyFactory.create(
        new ListaNegociacoes(),
        ['adiciona', 'esvazia'],
        (model) => this._negociacoesView.update(model));
    */
    constructor(model, view, props) {
        let proxy =  ProxyFactory.create(model, props, (model) => view.update(model));
        view.update(model) // Para renderizar a primeira vez
        return proxy;
    }

}