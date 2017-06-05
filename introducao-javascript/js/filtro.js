(function () {

    // Recupera o campo filtro
    var campoFiltro = document.querySelector("#filtro");

    // Adicionando listener do que foi digitado no filtro
    campoFiltro.addEventListener("input", function() {
        var digitado = this.value;
        var pacientes = document.querySelectorAll(".paciente");
        
        // Varre toda lista
        if (digitado.length > 0) {

            // Expressao regular
            var expressao = new RegExp(digitado, "i")

            // Itera lista pacientes
            pacientes.forEach(function(paciente) {
                var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;

                // Verifica nome e inibe as que são diferentes
                //if (!nome.startsWith(digitado)) {
                if (!expressao.test(nome)) {
                    paciente.classList.add("invisivel");
                } else {
                    paciente.classList.remove("invisivel");
                }
            });
        } else {
            pacientes.forEach(function(paciente) {
                paciente.classList.remove("invisivel");
            });  
        }
        
    });

})();