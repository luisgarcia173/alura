// Classe de bind de objeto tornando Proxy mais flexivel
class Bind {
        
    constructor(model, view, ...props) { //REST operator []
        let proxy =  ProxyFactory.create(model, props, (model) => view.update(model));
        view.update(model) // Para renderizar a primeira vez
        return proxy;
    }

}