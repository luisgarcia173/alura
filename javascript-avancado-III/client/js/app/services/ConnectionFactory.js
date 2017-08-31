// Transforma classe em um modulo usando funcao anonima (Design Pattern: Module)
var ConnectionFactory = (function(){

    // Scope variables
    const stores = ['negociacoes'];
    const version = 4;
    const dbName = 'aluraframe';
    let connection = null;
    let close = null;
    
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

                        // Monkey Patch: pattern que força a modificação de um comportamento padrao API, neste caso está 
                        // mandando uma exception quando o usuario tenta fechar conexao pelo objeto connection e nao pela
                        // Factory
                        close = connection.close.bind(connection);
                        connection.close = function() {
                            throw new Error("Não é possível encerrar a conexão diretamente!");
                        };
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

        static closeConnection() {
            if(connection){
                close();
                connection = null;
            }
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
