// Guarda campos formulario
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

// Exibe console
console.log(campos);

// Cache do corpo da tabela
var tbody = document.querySelector("table tbody");

// Listener no submit do formulario
document.querySelector(".form").addEventListener("submit", function(event){
    
    // Nao deixa dar reload da tela
    event.preventDefault();

    // Cria TR
    var tr = document.createElement("tr");

    // Cria TD
    campos.forEach(function(campo) {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // Calcula TD de volume
    var tdVolume = document.createElement("td");
    tdVolume.textContent = (campos[1].value * campos[2].value).toFixed(2);
    tr.appendChild(tdVolume);

    // Adiciona na TABLE a TR criada
    tbody.appendChild(tr);

    // Limpa forumulario
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    // Apos submit add focu no primeiro campo
    campos[0].focus();
});