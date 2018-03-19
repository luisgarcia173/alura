import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
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
	retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143'))) // 3 tentativas a cada 3 segundos
		.then(console.log)
		.catch(console.log)
);

// Listener do botao
document
	.querySelector('#myButton')
	.onclick = action;