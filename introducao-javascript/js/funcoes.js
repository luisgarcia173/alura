// PUBLIC(Escopo Global) Funcao para calculo IMC
function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// PUBLIC(Escopo Global) Valida peso
function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

// PUBLIC(Escopo Global) Valida altura
function validaAltura(altura) {
    if (altura >= 0 && altura <= 4.00) {
        return true;
    } else {
        return false;
    }
}

// PUBLIC(Escopo Global) Validar campo em branco, nulo
function validaValorVazio(valor) {
    if (valor == null || valor == 0) {
        return false;
    }
    return true;
} 

// PUBLIC(Escopo Global) Adicionar paciente
function adicionarPaciente(paciente) {
    // Criando elementos da table
    var novoPacienteTr = montaTr(paciente);

    // Atualiza tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(novoPacienteTr);
}

// Monta linha da tabela
function montaTr(paciente) {
    var novoPacienteTr = document.createElement("tr");
    novoPacienteTr.classList.add("paciente");

    novoPacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    novoPacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    novoPacienteTr.appendChild(montaTd(paciente.altura.toFixed(2), "info-altura"));
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