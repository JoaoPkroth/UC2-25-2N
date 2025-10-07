//Exercícios de fixação 

//Exercícios de interpretação de código.
//1) Leia o código abaixo. Indique todas as mensagens impressas no console


const bool1 = true 
const bool2 = false 
const bool3 = !bool2 

let resultado = bool1 && bool2 
console.log("a.", resultado) //false

resultado = bool1 && bool2 && bool3
console.log("b.", resultado) //false

resultado = !resultado && (bool1 || bool2)
console.log("c", resultado) //true

console.log("d",typeof resultado) //boolean

//Exercícios de interpretação de código.
/*
2) Seu colega se aproxima de você falando que o código dele não funciona como
devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso
no console?

Sugira ao seu colega uma solução para que o valor impresso no console seja, de
fato, a soma dos dois números.
*/

let primeiroNumero = prompt("Digite um número!") //salva o primerio número que o usario digitar
let segundoNumero = prompt("Digite outro número!") // salva o segundo número que o usuario digitar 

const soma = primeiroNumero + segundoNumero //faz a soma do primeiro e do segundo número que o usuario digitar. Exemplo: 5+7

console.log(soma) //agora imprime 12 se o usuário digitar 5 e 7