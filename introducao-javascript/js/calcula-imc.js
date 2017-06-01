(function () {

    // Alterando titulo
    var title = document.querySelector(".titulo");
    title.textContent = "Aparecida Nutricionista";


    // Adicionando listener remover no duplo clique
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.addEventListener("dblclick", function(event) {
        if(confirm("Deseja remover este paciente?")){
            var alvoEvento = event.target;
            var paiDoAlvo = alvoEvento.parentNode;
            paiDoAlvo.remove();
        }
    });

    // Iterando pacientes
    var trPacientes = document.querySelectorAll(".paciente");
    trPacientes.forEach(function(trPaciente) {
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

    });
        
})();