function ConsultaBuilder() {

	var procedimentos = []; 
	var particular = false; 
	var retorno = false;

	var clazz = {
		constroi : function(paciente) {
			return Consulta(paciente, procedimentos, particular, retorno);
		}, 
		comProcedimentos : function(valor) {
			procedimentos = valor;
			return this;
		},
		ehParticular : function(valor) {
			particular = valor;
			return this;
		},
		ehRetorno : function(valor) {
			retorno = valor;
			return this;
		}
	};
	
	return clazz;
}