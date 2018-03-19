// valida retorno da promise
export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);
	
// exibir log, sem ficar copiando contantemente lista
export const log = param => {
	console.log(param);
	return param;
};