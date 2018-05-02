describe("Paciente", function() {

	var paciente;
	// Executa antes de cada metodo de teste
	beforeEach(function() {
		paciente = new Paciente("Guilherme", 28, 72, 1.82); //(nome, idade, peso, altura)
	});

	// Unico teste por classe de equivalencia
    it("deve calcular o imc", function() {
		expect(paciente.imc()).toEqual(72 / (1.82 * 1.82));
	});

	it("deve calcular os batimentos do paciente", function() {
		expect(paciente.batimentos()).toEqual(1177344000);
	});

});