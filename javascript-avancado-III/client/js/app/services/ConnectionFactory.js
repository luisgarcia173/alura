'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, stores, version, dbName, connection, close, ConnectionFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            stores = ['negociacoes'];
            version = 4;
            dbName = 'aluraframe';
            connection = null;
            close = null;

            _export('ConnectionFactory', ConnectionFactory = function () {
                function ConnectionFactory() {
                    _classCallCheck(this, ConnectionFactory);

                    throw new Error('Não é possível criar instâncias de ConnectionFactory');
                }

                _createClass(ConnectionFactory, null, [{
                    key: 'getConnection',
                    value: function getConnection() {
                        return new Promise(function (resolve, reject) {

                            // Cria Database (nome, versao)
                            var openRequest = window.indexedDB.open(dbName, version);

                            // Quando criado ou alterado (baseado na versao)
                            openRequest.onupgradeneeded = function (e) {
                                // Crio as stores
                                ConnectionFactory._createStores(e.target.result);
                            };

                            // Quando iniciado o DB
                            openRequest.onsuccess = function (e) {
                                if (!connection) {
                                    connection = e.target.result;

                                    // Monkey Patch: pattern que força a modificação de um comportamento padrao API, neste caso está 
                                    // mandando uma exception quando o usuario tenta fechar conexao pelo objeto connection e nao pela
                                    // Factory
                                    close = connection.close.bind(connection);
                                    connection.close = function () {
                                        throw new Error("Não é possível encerrar a conexão diretamente!");
                                    };
                                }
                                resolve(connection);
                            };

                            // Em caso de erro
                            openRequest.onerror = function (e) {
                                console.log(e.target.error);
                                reject(e.target.error.name);
                            };
                        });
                    }
                }, {
                    key: 'closeConnection',
                    value: function closeConnection() {
                        if (connection) {
                            close();
                            connection = null;
                        }
                    }
                }, {
                    key: '_createStores',
                    value: function _createStores(connection) {
                        stores.forEach(function (store) {
                            // Verifica se tabela existe e remove
                            if (connection.objectStoreNames.contains(store)) {
                                connection.deleteObjectStore(store);
                            }
                            // Cria tabela com auto incremento
                            connection.createObjectStore(store, { autoIncrement: true });
                        });
                    }
                }]);

                return ConnectionFactory;
            }());

            _export('ConnectionFactory', ConnectionFactory);
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map