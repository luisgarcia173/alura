// Permite passar X argumento dentro arrow functions
export const partialize = (fn, ...params) => fn.bind(null, ...params);

// [Encadeia funcoes] Da direita pra esquerda
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
		fn(previousValue), value);
		
// [Encadeia funcoes] Da esquerda pra direita
export const pipe = (...fns) => value => 
	fns.reduce((previousValue, fn) => 
		fn(previousValue), value);

// Limitando a qtd de chamadas na funcao
export const takeUntil = (times, fn) => () => times-- > 0 && fn();

// Validando intervalo de clicks (Multiplos clicks)
export const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    };
};