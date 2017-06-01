(function () {

    // Alterando titulo
    var title = document.querySelector(".titulo");
    title.textContent = "Aparecida Nutricionista";

    // Iterando pacientes
    var trPacientes = document.querySelectorAll(".paciente");
    //var tdPaciente = document.querySelector("#primeiro-paciente");
    for (var i = 0; i < trPacientes.length; i++) {
        
        // Recuperando dados tela
        var trPaciente = trPacientes[i];
        var tdPeso = trPaciente.querySelector(".info-peso");
        var tdAltura = trPaciente.querySelector(".info-altura");
        var tdImc = trPaciente.querySelector(".info-imc");
        //---
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        // Validações
        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);
        if (!pesoEhValido) { tdImc.textContent = "Peso inválido!"; }
        if (!alturaEhValida) { tdImc.textContent = "Altura inválida!"; }

        // IMC = peso / altura x altura;
        if (pesoEhValido && alturaEhValida) {
            tdImc.textContent = calcularImc(peso, altura);
        } else {
            trPaciente.classList.add("paciente-invalido")
        }
    }

})();