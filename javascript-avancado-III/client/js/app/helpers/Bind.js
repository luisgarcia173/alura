"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Classe de bind de objeto tornando Proxy mais flexivel
var Bind = function Bind(model, view) {
    _classCallCheck(this, Bind);

    for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
    }

    //REST operator []
    var proxy = ProxyFactory.create(model, props, function (model) {
        return view.update(model);
    });
    view.update(model); // Para renderizar a primeira vez
    return proxy;
};
//# sourceMappingURL=Bind.js.map