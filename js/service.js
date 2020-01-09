function chama(){
    var promise = new Promise((resolve , reject) => {
    var x = new XMLHttpRequest();
    var urlPacientes = "https://api-pacientes.herokuapp.com/pacientes"
    
    x.open("GET" , urlPacientes);
    x.responseType = 'json';
    
    x.onload = function() {
        if (x.status === 200) {
            resolve(x.response);
        } else {
            reject(Error('deu ruim bb:' + x.statusText));
        }
    }
    x.send();
    });

    promise.then((resultado) => {
    console.log(resultado);    
    });
};