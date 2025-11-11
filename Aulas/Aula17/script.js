/*
const professor = {
    nome : "Lucas",
    idade : 33, 
    email : "lucas.g.f.alves@gmail.com"
}

console.log(professor.nome)
console.log(professor["idade"])
console.log(professor.email)

const laptop = {
    tela : 15,
    processador : "Ryzen",
    marca : "Lenovo",
    modelo : "K14" 
}

console.log("A marca do laptop é Lenovo", laptop.marca, "e modelo:", laptop.modelo)


/*
● Crie um objeto que represente um filme. Ele deve ter dados da
direção, o nome, o ano de lançamento, uma lista com o elenco e
uma propriedade que diga se você já viu ou não.

● Acesse e imprima no console cada uma das propriedades:
metade usando notação do ponto e a outra metade com
notação de colchetes.
*/

const filme = {
    direcao : "Guilherme del Toro",
    nome : "Frankenstein",
    ano : 2025,
    elenco : ["Jacob Elordi, Mia Goth, Oscar Isaac"],
    javiu : true
}

console.log("O Diretor do filme é:", filme.direcao)
console.log("O diretor do filme é:", filme.nome)
console.log("Ano lançado:", filme["ano"])
console.log("O elenco é:", filme["elenco"])
console.log("Já vi o filme?", filme["javiu"])

const pessoa = {
    nome : "Gustavo",
    idade : 17,
    generoMusicalPreferido : "trap e rap" 
}

console.log(`O nome do caba é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalPreferido}.`)
/*
const professores = [
    {nome: "Lucas", modulo : 2}
]
*/
