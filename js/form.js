var submit = document.querySelector("#submitform");

submit.addEventListener("click", function addNaTabela(event) {

    event.preventDefault();
    
    var form = document.querySelector("#form");

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    // var imc = form.imc.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    // imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    var table = document.querySelector("#table");

    table.appendChild(pacienteTr);
});