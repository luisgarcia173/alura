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

function validaValorVazio(valor) {
    if (valor == null || valor == 0) {
        return false;
    }
    return true;
} 