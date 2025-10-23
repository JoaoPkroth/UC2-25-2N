//DESAFIO1 - A ESCOLHA DA FERRAMENTA 

//Variáveis Velocidade
//Criando o valor de cada variável da velocidade dos blocos 
const velocidadeMadeira = 30
const velocidadePedra = 50
const velocidadeFerro = 70
const velocidadeDiamante = 90

//Variável Bloco
//criando uma variável para perguntar ao usuário escolher um dos minérios/material abaixo. Com isso fazer o console.log imprimir o material 

let blocoMinerar = prompt("Escolha algum minério básico ou material: Madeira, Pedra, Ferro, Obsidian ou Diamante.")

//Estrutura

//Fazendo a estrutura do código e definindo qual a melhor ferramenta para utilizar dependendo do minério/material.

if (blocoMinerar === "Diamante" || blocoMinerar === "Obsidian") {
    console.log(`Use a Picareta de Diamante: Velocidade ${velocidadeDiamante}!`)
} else if (blocoMinerar === "Pedra") {
    console.log(`Picareta de Pedra ou Ferro é o ideal: Velocidade ${velocidadeFerro}!`)
} else if (blocoMinerar === "Ferro") {
    console.log(`Picareta de Pedra ou Ferro é o ideal: Velocidade ${velocidadeFerro}!`)
} else {
    console.log(`Qualquer ferramenta funciona, mas a de Madeira é a mais simples: Velocidade ${velocidadeMadeira}.`)
}

//DESAFIO2 - O CÁLCULO DE DANO
//criando as variáveis:

let danoEspada = 6 
let forcaEncantamento = 1.5 
let armaduraInimiga = 2
let vidaInimiga = 20 

let danoBruto = danoEspada * forcaEncantamento // let danoBruto = danoEspada (6) * forcaEncantamento (1.5) = 9
let danoFinal = danoBruto - armaduraInimiga // let danoFinal = danoBruto (9) - armaduraInimiga(2) = 7
let resultado = vidaInimiga - danoFinal // let resultado = vidaInimiga (20) - danoFinal (7) = 13

//criando a estrutura do código:
if (resultado <=0){
    console.log("O creeper foi derrotado! Você sobreviveu a explosão!")
} else {
    console.log("O creeper ainda está vivo com", resultado, "de vida. Corra!")
}
//Com resultado ficou 13, o creeper sobreviveu, pois não é um resultado menor ou igual a 0

//DESAFIO3 - O CRAFTING

//criando as variáveis:

const temDiamante = false 
let nivelMesaCrafting = 10
const temGravetos = true 
let temFerro = 15 

//Se tiver temGravetos ou nivelMesaCrafting menor que 3 = permitido o crafting
//temDiamantes for true e a quantidade de temFerro for maior/igual 8 = permitido crafting

if (temGravetos || nivelMesaCrafting < 3) { // || : OR - falso se ambos os operadores forem falso.
    (temDiamante && temFerro >= 8) //&& : AND - verdadeiro se ambos os operadores forem verdadeiros.
    console.log("Picareta de diamante criada! Hora de buscar obsidian!")
} else {
    console.log("Falta recursos ou as condições de crafting não são atendidas!")
}
