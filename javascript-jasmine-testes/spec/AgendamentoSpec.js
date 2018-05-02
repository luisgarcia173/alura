describe("Agendamento", function() {

	var paciente;
	var agendamento;
	beforeEach(function() {
		paciente = new PacienteBuilder().constroi();
		agendamento = new Agendamento();
	});

	it("deve agendar para 20 dias depois", function() {
		var consulta = new ConsultaBuilder().paraData(new Date(2018, 2, 31)).constroi(paciente);
		var novaConsulta = agendamento.para(consulta);

		// Asserts
		expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 3, 20).toString());
	});

	it("deve pular fins de semana", function() {
		var consulta = new ConsultaBuilder().paraData(new Date(2018, 3, 2)).constroi(paciente);
		var novaConsulta = agendamento.para(consulta);

		// Asserts
		expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 3, 23).toString());
	});

});