import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, pipe } from '../utils/operators.js';
import { Maybe } from '../utils/maybe.js';

const API = 'http://localhost:3000/notas';

/*const sumItems = code => notas => 
    notas.$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
	.reduce((total, item) => total + item.valor, 0);*/
	
const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens));
const filterItemsByCode = (code, itemsM) => itemsM.map(items => items.filter(item => item.codigo === code));
const sumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item) => total + item.valor, 0));

export const notasService = {

    listAll() {
        return fetch(API)
            .then(handleStatus)
            .then(notas => Maybe.of(notas)) // Tratando tipos nulos com Mônada maybe, testar com Maybe.of(null), retorno esperado 0
			.catch(err => {
				console.log(err);
				return Promise.reject('Não foi possível obter as notas fiscais');
			});
    },

    sumItems(code) {
		// realizando a composição
        const sumItems = pipe(
            getItemsFromNotas,
            partialize(filterItemsByCode, '2143'), 
            sumItemsValue, 
        );
		
        return this.listAll()
            .then(sumItems)
            .then(result => result.getOrElse(0)); // Recupera valor do Mônada
    }
};