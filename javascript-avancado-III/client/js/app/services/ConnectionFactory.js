// Global variables
var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe'


// Classe responsavel por controlar conexao banco
class ConnectionFactory {

    constructor() {
        throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {

        // Cria Database (nome, versao)
        let openRequest = window.indexedDB.open(dbName, version);

        // Quando criado ou alterado (baseado na versao)
        openRequest.onupgradeneeded = (e) => {
            console.log('Cria ou atualiza um banco já existente.');

            let minhaConnection = e.target.result;

            // Verifica se tabela existe e remove
            if(minhaConnection.objectStoreNames.contains('negociacoes')){
                minhaConnection.deleteObjectStore('negociacoes');    
            }

            // Cria tabela com auto incremento
            minhaConnection.createObjectStore('negociacoes', {autoIncrement: true});
        };

        // Quando iniciado o DB
        openRequest.onsuccess = (e) => {
            console.log('Conexão obtida com sucesso!');
            connection = e.target.result;
        };

        // Em caso de erro
        openRequest.onerror = (e) => {
            console.log(e.target.error);
        };

        });
    }

}