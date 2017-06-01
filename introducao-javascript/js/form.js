(function () {

    // Adicionando listener
    var btAdicionar = document.querySelector("#adicionar-paciente");
    btAdicionar.addEventListener("click", function(event) {
        event.preventDefault(); //prevent page reload
        
        // Recuperando dados do form
        var form = document.querySelector("#form-adiciona");
        var paciente = obtemPacienteDoFormulatio(form);

        // Criando elementos da table
        var novoPacienteTr = montaTr(paciente);

        // Atualiza tabela
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(novoPacienteTr);

        // Limpa formulário
        form.reset();

    });

    // Recupera paciente do form
    function obtemPacienteDoFormulatio(form) {
        var paciente = {
            altura: form.altura.value,
            peso: form.peso.value,
            gordura: form.gordura.value,
            nome: form.nome.value,
            imc: calcularImc(form.peso.value, form.altura.value)
        };
        return paciente;
    }

    // Monta linha da tabela
    function montaTr(paciente) {
        var novoPacienteTr = document.createElement("tr");
        novoPacienteTr.classList.add("paciente");

        novoPacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        novoPacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        novoPacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        novoPacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        novoPacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return novoPacienteTr;
    }

    // Monta coluna para cada linha
    function montaTd(conteudo, classe) {
        var td = document.createElement("td");
        td.textContent = conteudo;
        td.classList.add(classe);
        return td;
    }

})();

