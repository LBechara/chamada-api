var json

function chama(){
    // var promise = new Promise(function(resolve , reject))
    var x = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts"
    var urlPacientes = "https://api-pacientes.herokuapp.com/pacientes"

    x.open("GET" , url , false);
    x.send();

    var resposta = x.response;

    return resposta;
}


function ok() {
    console.log("olá")
}