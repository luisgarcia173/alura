describe("Paciente", function() {

	// Unico teste por classe de equivalencia
    it("deve calcular o imc", function() {
        var paciente = new Paciente("Guilherme", 28, 72, 1.82); //(nome, idade, peso, altura)

		// Asserts
		expect(paciente.imc()).toEqual(72 / (1.82 * 1.82));
	});

	it("deve calcular os batimentos do paciente", function() {
        var paciente = new Paciente("Guilherme", 28, 72, 1.82); //(nome, idade, peso, altura)

		// Asserts
		expect(paciente.batimentos()).toEqual(1177344000);
	});

});