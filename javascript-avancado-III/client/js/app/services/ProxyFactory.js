"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Classe encapsular proxy da controller (Design Pattern: Factory)
var ProxyFactory = function () {
    function ProxyFactory() {
        _classCallCheck(this, ProxyFactory);
    }

    _createClass(ProxyFactory, null, [{
        key: "create",


        // Nao precisa da instancia da classe
        value: function create(objeto, props, acao) {

            // Proxy interceptar metodos da classe ListaNegociacoes (Design Pattern: Proxy)
            return new Proxy(objeto, {

                // Intercepta metodos
                get: function get(target, prop, receiver) {
                    if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                        return function () {
                            console.log("Interceptado: " + prop);
                            var retorno = Reflect.apply(target[prop], target, arguments);
                            acao(target);
                            return retorno;
                        };
                    }
                    return Reflect.get(target, prop, receiver);
                },


                // Intercepta propriedade (Setter)
                set: function set(target, prop, value, receiver) {
                    var retorno = Reflect.set(target, prop, value, receiver);
                    if (props.includes(prop)) {
                        console.log("Interceptado: " + prop);
                        acao(target);
                    }
                    return retorno;
                }
            });
        }
    }, {
        key: "_ehFuncao",
        value: function _ehFuncao(func) {
            return (typeof func === "undefined" ? "undefined" : _typeof(func)) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
        }
    }]);

    return ProxyFactory;
}();
//# sourceMappingURL=ProxyFactory.js.map