/*
console.log("1"==="2")
console.log("2"==="2")
console.log(2==="2")

console.log("1"!=="2")
console.log("2"!=="2")
console.log(2!=="2")

console.log(1>2) //false
console.log(2>2) //false
console.log(3>2) //true

console.log(1>=2) //false
console.log(2>=2) //true
console.log(3>=2) //true

console.log(1<2) //true
console.log(2<2) //false
console.log(3<2) //false

console.log(1<=2) //true
console.log(2<=2) //true
console.log(3<=2) //false

Crie duas variáveis que guardem dois números. Imprima na tela as seguintes
mensagens:

1. O primeiro número é igual ao segundo? True/False
2. O primeiro número é diferente do segundo? True/False
3. O primeiro número é maior que o segundo? True/False
4. O primeiro número é menor que o segundo? True/False
*/

// Duas variáveis com números

// Pergunta os números para o usuário
let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

// Perguntas e respostas
let pergunta1 = "O primeiro número é igual ao segundo?"
let pergunta2 = "O primeiro número é diferente do segundo?"
let pergunta3 = "O primeiro número é maior que o segundo?"
let pergunta4 = "O primeiro número é menor que o segundo?"

// Mostrando as respostas
console.log(pergunta1, numero1 === numero2)
console.log(pergunta2, numero1 !== numero2)
console.log(pergunta3, numero1 > numero2)
console.log(pergunta4, numero1 < numero2)
