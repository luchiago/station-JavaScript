axios.get('https://api.github.com/users/luchiago')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })