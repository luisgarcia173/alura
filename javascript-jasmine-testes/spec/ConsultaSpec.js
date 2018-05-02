describe("Consulta", function() {

	var paciente;
	// Executa antes de cada metodo de teste
	beforeEach(function() {
		paciente = new Paciente("Guilherme", 28, 72, 1.82); //(nome, idade, peso, altura)
	});

    it("nao deve cobrar nada se for um retorno", function() {
		var consulta = new Consulta(paciente, [], true, true); // (paciente, procedimentos, particular, retorno)

		// Asserts
		expect(consulta.preco()).toEqual(0);
	});

	// Testes por classe de equivalencia deve seguir sempre do cenario mais simples
	it("deve cobrar 25 reais por cada procedimento comum", function() {
		var consulta = new Consulta(paciente, ["proc1", "proc2"], false, false);

		// Asserts
		expect(consulta.preco()).toEqual(50);
	});

	it("deve dobrar o preco da consulta particular", function() {
		var consulta = new Consulta(paciente, ["proc1", "proc2"], true, false);

		// Asserts
		expect(consulta.preco()).toEqual(100);
	});

	it("deve cobrar preco especifico dependendo do procedimento", function() {
		var consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

		// Asserts
		expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
	});

	it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
		var consulta = new Consulta(paciente, ["procedimento-comum", "raio-x"], true, false);

		// Asserts
		expect(consulta.preco()).toEqual((25 + 55) * 2);
	});

});