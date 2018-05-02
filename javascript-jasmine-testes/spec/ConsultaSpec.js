describe("Consulta", function() {

	var paciente;
	// Executa antes de cada metodo de teste
	beforeEach(function() {
		paciente = new PacienteBuilder().constroi();
	});

	describe("Consultas do Tipo Retorno", function() {
		it("nao deve cobrar nada se for um retorno", function() {
			var consulta = new ConsultaBuilder().ehParticular(true).ehRetorno(true).constroi(paciente);

			// Asserts
			expect(consulta.preco()).toEqual(0);
		});
	});
    
	describe("Consultas com procedimento", function() {
		// Testes por classe de equivalencia deve seguir sempre do cenario mais simples
		it("deve cobrar 25 reais por cada procedimento comum", function() {
			var consulta = new ConsultaBuilder().comProcedimentos(["proc1", "proc2"]).constroi(paciente);
	
			// Asserts
			expect(consulta.preco()).toEqual(50);
		});
		
		it("deve cobrar preco especifico dependendo do procedimento", function() {
			var consulta = new ConsultaBuilder().comProcedimentos(["procedimento-comum", "raio-x", "procedimento-comum", "gesso"]).constroi(paciente);
	
			// Asserts
			expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
		});
	});

	describe("Consultas particular", function() {
		it("deve dobrar o preco da consulta particular", function() {
			var consulta = new ConsultaBuilder().comProcedimentos(["proc1", "proc2"]).ehParticular(true).constroi(paciente);
	
			// Asserts
			expect(consulta.preco()).toEqual(100);
		});
	
	
		it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
			var consulta = new ConsultaBuilder().comProcedimentos(["procedimento-comum", "raio-x"]).ehParticular(true).constroi(paciente);
	
			// Asserts
			expect(consulta.preco()).toEqual((25 + 55) * 2);
		});
	});

});