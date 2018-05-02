function ConsultaBuilder() {

	var procedimentos = []; 
	var particular = false; 
	var retorno = false;
	var data = new Date(2018, 4, 1);

	var clazz = {
		constroi : function(paciente) {
			return Consulta(paciente, procedimentos, particular, retorno, data);
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
		},
		paraData : function(valor) {
			data = valor;
			return this;
		}
	};
	
	return clazz;
}