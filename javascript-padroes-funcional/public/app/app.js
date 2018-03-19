import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';

// Acoes relacionadas ao click
const operations = pipe(
	partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

// Acao do click do botao
const action = operations(() => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);

// Listener do botao
document
	.querySelector('#myButton')
	.onclick = action;

/* //Versao Inicial
document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
	.then(handleStatus)
	// retornará para o próximo then uma lista de itens
    .then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
    .then(log)
	// retornará para o próximo then uma lista de itens filtrada
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(log)
	// retornará para o próximo then o total  
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))
    .then(console.log)
	.catch(console.log);
*/