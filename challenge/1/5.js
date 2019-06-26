function skills(usuarios) {
    for(u of usuarios){
        skill = u['habilidades'].join(', ')
        mensagem = "O " + u['nome'] + " possui as habilidades: " + skill
        console.log(mensagem)
    }
}

var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

skills(usuarios)