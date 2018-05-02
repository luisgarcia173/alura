// Classe responsavel por validar possivel valor nulo ou nao
export class Maybe {

	// Construtor
    constructor(value) {
        this._value = value;
	}
	
	// Instancia da classe
	static of(value) {
        return new Maybe(value);
	}
	
	// Valida valor recebido construtor (blindado)
	isNothing() {
        return this._value === null || this._value === undefined;
	}
	
	// Atribui comportamento de Map
	map(fn) {
        if(this.isNothing()) return Maybe.of(null);
    	return Maybe.of(fn(this._value));
	}
	
	// Retorna valor se houver, se não retorna valor passado
	getOrElse(value) {
        if(this.isNothing()) return value;
        return this._value;
    }
}