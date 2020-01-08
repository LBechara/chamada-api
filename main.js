var json

function chama(){
    var promise = new Promise((resolve , reject) => {
    var x = new XMLHttpRequest();
    var urlPacientes = "https://api-pacientes.herokuapp.com/pacientes"
    
    x.open("GET" , urlPacientes);
    x.responseType = 'json';
    
    var resposta = x.response;
    
    x.onload = () => {
        if (x.status === 200) {
            resolve(x.response);
            console.log("bananas");
        } else {
            reject(Error('deu ruim bb:' + x.statusText));
            console.log("não deu");
        }
        x.send();
    }

    });

    promise.then((message) => {
        console.log('ta aqui' + message)
    })
}


function ok() {
    console.log("olá")
}

var dado = document.querySelector("#primeiro").querySelector("#n").textContent;
// var dadoUm = dado.querySelector("#n");
// var conteudoDado = dadoUm.textContent;