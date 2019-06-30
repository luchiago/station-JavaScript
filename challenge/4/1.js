function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve()
        } else {
            reject()
        }
    })
}
checaIdade(12)
    .then(function (response) {
        console.log("Maior que 18");
    })
    .catch(function (response) {
        console.log("Menor que 18");
    });
