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
        var pesoEhValido = true;
        var alturaEhValida = true;
        if (peso <= 0 || peso >= 300) {
            tdImc.textContent = "Peso inválido!";
            pesoEhValido = false;
        }
        if (altura <= 0 || altura >= 4) {
            tdImc.textContent = "Altura inválida!";
            alturaEhValida = false;
        }

        // IMC = peso / altura x altura;
        if (pesoEhValido && alturaEhValida) {
            tdImc.textContent = calcularImc(peso, altura);
        } else {
            trPaciente.classList.add("paciente-invalido")
        }
    }

    // Funcao para calculo IMC
    function calcularImc(peso, altura) {
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

})();

