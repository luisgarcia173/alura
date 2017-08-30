// Classe encapsular proxy da controller (Design Pattern: Factory)
class ProxyFactory {

    // Nao precisa da instancia da classe
    static create(objeto, props, acao) {

        // Proxy interceptar metodos da classe ListaNegociacoes (Design Pattern: Proxy)
        return new Proxy(objeto, {

            // Intercepta metodos
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        console.log(`Interceptado ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            // Intercepta propriedade (Setter)
            set(target, prop, value, receiver){
                if(props.includes(prop)) {
                    console.log(`Interceptado ${prop}`);
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }

        });

    }

    static _ehFuncao(func) {
        return typeof(func) == typeof(Function);
    }

}