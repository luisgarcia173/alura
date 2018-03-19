// valida retorno da promise
export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);
	
// exibir log, sem ficar copiando contantemente lista
export const log = param => {
	console.log(param);
	return param;
};

// cria mecanismo de timeout da promise executada
export const timeoutPromise = (milliseconds, promise) => {

    const timeout =  new Promise((resolve, reject) =>
        setTimeout(() => 
            reject(`Limite da operação excedido (limite: ${milliseconds} ms)`), 
                milliseconds));

    return Promise.race([
        timeout, 
        promise
    ]);
};

// cria mecanismo de delay da promise executada
export const delay = milliseconds => data =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), milliseconds)
	);
	
// cria mecanismo de retry da promise executada
export const retry = (retries, milliseconds, fn) =>
	fn().catch(err => {
		console.log(retries);
		return delay(milliseconds)().then(() => // Chama delay
			retries > 1
				? retry(retries - 1, milliseconds, fn) // Recursao do retry
				: Promise.reject(err));
	});