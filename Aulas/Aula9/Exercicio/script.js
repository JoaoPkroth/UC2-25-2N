/*
//1. Crie um programa que peça ao usário para inserir o seu nome e sua cor favorita e imprima a mensagem: "A cor favorita de Fulano é COR"

//2. Realize o exercício duas vezes. Utilizando template strings e concatenação 
const nome = prompt("Qual o seu nome?")
const corFavorita = prompt("Qual a sua cor favorita?")

console.log("A cor favorita de " + nome + " é " + corFavorita)

const frase4 = `Meu nome é ${nome} e sua cor favorita é ${corFavorita}`


//3. Peça para o usário escrever uma frase e imprima no console a frase alterada, com: *Todas as letras maiúsculas; Na língua do i (substituir a vogal "o" por "i")

// Peça para o usuário escrever uma frase
let frase = prompt("Digite uma frase:")

// Converta todas as letras para maiúsculas
let fraseMaiuscula = frase.toUpperCase()

// Substitua todas as vogais "o" por "i"
let fraseLinguaDoI = fraseMaiuscula.replaceAll("O", "I")

// Mostre o resultado no console
console.log("Frase alterada:", fraseLinguaDoI)

//Arrays

//1. Lista com 5 raças de chachorros

const racas = ["Poodle", "Pastor-Alemão", "Golden Retriever", "Buldog Françês", "Dálmata"]

const escolhasDeRacas = prompt("Escolha um número de 0 a 4:")

console.log(racas[escolhasDeRacas])

//Propriedade length

const pokemon = ["bulbassauro", "charmander", "squirtle"]
console.log(pokemon.length)

const seriesBoas = ["Vikings", "The Big Bang Theory", "Friends"]
console.log(seriesBoas.includes("Vikings"), seriesBoas.includes("GOT"))

const numeros = [1,2,3]

numeros.push(4)
console.log(numeros)

numeros.push(5,6,7)
console.log(numeros)

const meusPeixes = ["Palhaço","Mandarim","Esturjão"]
meusPeixes.pop()
console.log(meusPeixes)

const letras = ["A","B","C","D","E","F","G","H"]
letras.splice(2,1)
console.log(letras)

letras.splice(3,2)
console.log(letras)


const numerosA = ["1","2","3","4","5","6"]
numerosA.push(7)
numerosA.splice(3,2)
console.log(numerosA)
*/
//Exercicios de interpretação de código

//1. Indique todas as mensagens impressas no console

let array
console.log(array)//Letra A: Imprime Undefined

array = null
console.log(array)//Letra B: Imprime Null

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log(`c. `, array.length)//Letra C: Imprime 11

let i = 0
console.log(`d. `, array[i])//Letra D: Imprime 3

array[i+1] = 19
console.log(`e. `, array)//Letra E: Imprime [19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log(`f. `, valor)//Letra F: Imprime 9


//2. Leia o código abaixo com atenção

const fraseO = prompt("Digite uma frase")

console.log(fraseO.toLocaleUpperCase().replaceAll("A","I"),fraseO.length)//Imprime a frase do usuário toda em maiúscula, transforma todos os "A" em "I" e imprime a quantidade de caracteres que tem na frase.

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//"SUBI NUM ÔNIBUS EM MIRROCOS"

//3. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUser = prompt("Qual seu nome?")
const emailDoUser = prompt("Qual seu email?")

console.log(emailDoUser,"Parabéns seu e-mail foi cadastrado,","Seja bem-vindo(a):",nomeDoUser)

/*
4. Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:

a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, uma embaixo da outra.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a
segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
*/
// a) Cria um array com 5 comidas preferidas
let comidas = ["Pizza", "Lasanha", "Hambúrguer", "Sushi", "Torta de chocolate"]

// Imprime o array completo
console.log(comidas)

// b) Imprime a mensagem e as comidas, uma embaixo da outra
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// c) Pede uma comida preferida pro usuário
let novaComida = prompt("Qual é a sua comida preferida?")

// Troca a segunda comida pela nova
comidas[1] = novaComida

// Imprime a nova lista
console.log("Nova lista de comidas preferidas:")
console.log(comidas)

/*
5. Faça um programa, seguindo os passos:

a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
uma por uma, no array.
c) Imprima o array no console.
d) Peça ao usuário que digite o índice da tarefa que ele já realizou: 0, 1 ou 2.
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console.
*/
// a) Cria um array vazio chamado listaDeTarefas
let listaDeTarefas = []

// b) Pede 3 tarefas pro usuário e adiciona ao array
let tarefa1 = prompt("Digite a primeira tarefa do dia:")
let tarefa2 = prompt("Digite a segunda tarefa do dia:")
let tarefa3 = prompt("Digite a terceira tarefa do dia:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// c) Imprime o array completo no console
console.log("Suas tarefas de hoje são:")
console.log(listaDeTarefas)

// d) Pede o índice da tarefa que já foi realizada
let indice = Number(prompt("Digite o índice da tarefa que já realizou (0, 1 ou 2):"))

// e) Remove a tarefa realizada da lista
listaDeTarefas.splice(indice, 1)

// f) Imprime o array atualizado
console.log("Tarefas restantes:")
console.log(listaDeTarefas)


/*
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras
da frase, ignorando os espaços

2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um
programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o
tamanho do array
*/
// ===== Exercício 1 =====
// Recebe uma frase e retorna um array com as palavras

let frase = prompt("Digite uma frase:")
let palavras = frase.split(" ") // divide a frase nos espaços

console.log("As palavras da frase são:")
console.log(palavras)


// ===== Exercício 2 =====
// Dado o array de frutas, ache o índice da palavra Abacaxi
// e imprima o índice e o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indiceAbacaxi = frutas.indexOf("Abacaxi")
let tamanhoArray = frutas.length

console.log("O índice da palavra 'Abacaxi' é:", indiceAbacaxi)
console.log("O tamanho do array é:", tamanhoArray)
