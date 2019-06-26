function experiencia(anos) {
    if (anos < 2) {
        console.log('Iniciante')
    } else if (anos < 4) {
        console.log('Intermediário')
    } else if (anos < 7) {
        console.log('Avançado')
    } else {
        console.log('Jedi Master')
    }
}
var anosEstudo = 1;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master