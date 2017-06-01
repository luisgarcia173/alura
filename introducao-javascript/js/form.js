(function () {

    // Adicionando listener
    var btAdicionar = document.querySelector("#adicionar-paciente");
    btAdicionar.addEventListener("click", function(event) {
        event.preventDefault(); //prevent page reload
        
        // Recuperando dados do form
        var form = document.querySelector("#form-adiciona");
        var altura = form.altura.value; //usando querySelector em um form, eh possivel acessar a partir do name do input
        var peso = form.peso.value;
        var gordura = form.gordura.value;
        var nome = form.nome.value;

        // Criando elementos da table
        var novoPacienteTr = document.createElement("tr");
        var novoNomeTd = document.createElement("td");
        var novoPesoTd = document.createElement("td");
        var novoAlturaTd = document.createElement("td");
        var novoGorduraTd = document.createElement("td");
        var novoIMCTd = document.createElement("td");

        // Populando elementos
        novoNomeTd.textContent = nome;
        novoPesoTd.textContent = peso;
        novoAlturaTd.textContent = altura;
        novoGorduraTd.textContent = gordura;

        // Adicionando na table
        novoPacienteTr.appendChild(novoNomeTd);
        novoPacienteTr.appendChild(novoPesoTd);
        novoPacienteTr.appendChild(novoAlturaTd);
        novoPacienteTr.appendChild(novoGorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(novoPacienteTr);

    });

})();

