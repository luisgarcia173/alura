(function () {

    // Adicionando listener
    var btImportar = document.querySelector("#importar-pacientes");
    btImportar.addEventListener("click", function(event) {
        
        // Requisicoes HTTP (Ajax/Assíncrono)
        var xhr = new XMLHttpRequest();

        // Define verbo de requisicao (GET, POST, PUT, ..., HEAD)
        xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

        // Cria callback da resposta
        xhr.addEventListener("load", function() {
            var erroAjax = document.querySelector("#erro-ajax");

            // Verificando status resposta
            if (xhr.status == 200) {
                erroAjax.classList.add("invisivel");

                // Retorno em String
                var resposta = xhr.responseText;
                // Parse de String para JsonObject
                var pacientes = JSON.parse(resposta);

                // Adiciona pacientes na tabela
                pacientes.forEach(function(paciente) {
                    adicionarPaciente(paciente);
                });
            } else {
                console.log("Erro " + xhr.status + ": " + xhr.responseText);
                erroAjax.classList.remove("invisivel");
            }

        });

        // Faz requisicao
        xhr.send();

    });

})();