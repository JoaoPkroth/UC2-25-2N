/*
//operador && AN
const interruptorA = true 
const interruptorB = false

const resultado = interruptorA && interruptorB
console.log(resultado) //False

const interruptor2B = false
const interruptor2C = true 

const resultado2 = interruptor2B && interruptor2C
console.log(resultado2) //False

const interruptor3A = true
const interruptor3C = true

const resultado3 = interruptor3A && interruptor3C
console.log(resultado3) //True

const interruptor4A = true
const interruptor4B = false
const interruptor4C = true 

const resultado4 = interruptor4A && interruptor4B && interruptor4C
console.log(resultado4) //False
*/
//teste operador || OR
/*
const operador1A = true
const operador1b = false 

const resultado5 = operador1A || operador2b
console.log(resultado5) //True

const operador2B = false
const operador2C = true

const resultado6 = operador2B || operador2C
console.log(resultado6) //True

const operador3A = true
const operador3C = true

const resultado7 = operador3A || operador3C
console.log(resultado7) //True

const operador4A = true 
const operador4B = false
const operador4C = true

const resultado8 = operador4A || operador4B || operador4C
console.log(resultado8) //True


// Pegando os dados do usuário
let nome = prompt("Digite seu nome:")
let anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
let anoAtual = Number(prompt("Digite o ano atual:"))

// Calculo da idade
let idade = anoAtual - anoNascimento

// Verificando se é maior de idade
let maiorDeIdade = idade >= 18

// Calculo da idade em 2050
let idade2050 = 2050 - anoNascimento

// Mostrando os resultados
console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("É maior de idade?", maiorDeIdade)
console.log("Idade em 2050:", idade2050)
*/

//Exercícios de fixação 

/*Exercícios de interpretação de código.
1) Leia o código abaixo. Indique todas as mensagens impressas no console
*/

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado0 = bool1 && bool2
console.log("a.", resultado0)

resultado0 = bool1 && bool2 && bool3
console.log("b.", resultado0)

resultado0 = !resultado0 && (bool1 || bool2)
console.log("c", resultado)

console.log("d",typeof resultado0)