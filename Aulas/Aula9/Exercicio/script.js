/*
//1. Crie um programa que peça ao usário para inserir o seu nome e sua cor favorita e imprima a mensagem: "A cor favorita de Fulano é COR"

//2. Realize o exercício duas vezes. Utilizando template strings e concatenação 
const nome = prompt("Qual o seu nome?")
const corFavorita = prompt("Qual a sua cor favorita?")

console.log("A cor favorita de " + nome + " é " + corFavorita)

const frase4 = `Meu nome é ${nome} e sua cor favorita é ${corFavorita}`

*/
//3. Peça para o usário escrever uma frase e imprima no console a frase alterada, com: *Todas as letras maiúsculas; Na língua do i (substituir a vogal "o" por "i")

// Peça para o usuário escrever uma frase
let frase = prompt("Digite uma frase:")

// Converta todas as letras para maiúsculas
let fraseMaiuscula = frase.toUpperCase()

// Substitua todas as vogais "o" por "i"
let fraseLinguaDoI = fraseMaiuscula.replaceAll("O", "I")

// Mostre o resultado no console
console.log("Frase alterada:", fraseLinguaDoI)


