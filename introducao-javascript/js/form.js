(function () {

    // Adicionando listener
    var btAdicionar = document.querySelector("#adicionar-paciente");
    btAdicionar.addEventListener("click", function(event) {
        event.preventDefault(); //prevent page reload
        
        // Recuperando dados do form
        var form = document.querySelector("#form-adiciona");
        var paciente = obtemPacienteDoFormulatio(form);

        // Valida form
        var erros = validaPaciente(paciente);
        if (erros.length > 0) {
            exibeMensagensDeErro(erros);
            return; // Força saída
        }

        // Atualiza tabela
        adicionarPaciente(paciente);

        // Limpa formulário
        form.reset();
        document.querySelector("#mensagens-erro").innerHTML = "";

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

    // Valida form
    function validaPaciente(paciente) {
        var erros = [];
        if (!validaValorVazio(paciente.nome.length)){ erros.push("O campo Nome não pode estar branco."); }
        if (!validaValorVazio(paciente.peso.length)){ erros.push("O campo Peso não pode estar branco."); }
        if (!validaValorVazio(paciente.altura.length)){ erros.push("O campo Altura não pode estar branco."); }
        if (!validaValorVazio(paciente.gordura.length)){ erros.push("O campo %Gordura não pode estar branco."); }
        if (!validaPeso(paciente.peso)){ erros.push("Peso inválido."); }
        if (!validaAltura(paciente.altura)){ erros.push("Altura inválida."); }
        return erros;
    }

    // Exibe erros
    function exibeMensagensDeErro(erros) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

})();

