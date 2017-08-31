// Transforma classe em um modulo usando funcao anonima (Design Pattern: Module)
var ConnectionFactory = (function(){

    // Scope variables
    var stores = ['negociacoes'];
    var version = 4;
    var dbName = 'aluraframe'
    var connection = null;
    
    // Classe responsavel por controlar conexao banco
    return class ConnectionFactory {
    
        constructor() {
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
    
        static getConnection() {
            return new Promise((resolve, reject) => {
    
                // Cria Database (nome, versao)
                let openRequest = window.indexedDB.open(dbName, version);
    
                // Quando criado ou alterado (baseado na versao)
                openRequest.onupgradeneeded = (e) => {
                    // Crio as stores
                    ConnectionFactory._createStores(e.target.result);
                };
    
                // Quando iniciado o DB
                openRequest.onsuccess = (e) => {
                    if(!connection){
                        connection = e.target.result;
                    }
                    resolve(connection);
                };
    
                // Em caso de erro
                openRequest.onerror = (e) => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };
    
            });
        }
    
        static _createStores(connection) {
            stores.forEach(store => {
                // Verifica se tabela existe e remove
                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store)
                }
                // Cria tabela com auto incremento
                connection.createObjectStore(store, {autoIncrement: true});
            });
        }
    
    }
})();
