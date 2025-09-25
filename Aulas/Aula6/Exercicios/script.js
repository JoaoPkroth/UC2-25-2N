//Exercicio 1.
/* let é uma variavel que pode ter seus valorers alterados ao decorrer do tempo. Declaramos que o valor de "a e b" são "10". Em seguida "b" tem seu valor "10" e "5".

let a = 10 //tem seu valor 10
let b = 10// tem seu valor 10

console.log(b)//imprime 10

b = 5
console.log(a, b)//imprime os valores 10 e 5

let a = 10 // a = 10
let b = 10 // b = 10

c = a // c recebe 10 (mesmo valor de a)
b = c // b recebe 10 (continua 10)
a = b // a recebe 10 (continua 10)

console.log(a, b, c) //Imprime todos os valores iguais (10)

//Exercicio 3.
/* Analise o programa abaixo, entenda o que ele faz e sugira nomes melhores para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou carcteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dias?")
console.log("Você recebe", t,"/",p, "por hora")

// Exercício 3. R:
// O programa calcula quanto o usuário recebe por hora de trabalho

let horasTrabalhadasPorDia = Number(prompt("Quantas horas você trabalha por dia?"))
let salarioPorDia = Number(prompt("Quanto você recebe por dia?"))
let salarioPorHora = salarioPorDia / horasTrabalhadasPorDia
console.log("Você recebe", salarioPorHora, "por hora")

/* Exercícios de escrita de código

1) Construa um programa, seguindo os seguintes passos:
1. Declare uma variável para armazenar um nome, sem atribuir um valor.
2. Declare uma variável para armazenar uma idade, sem atribuir um valor. 
3. Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
4. Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
5. Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores à variáveis que acbou de criar.
6. Imprima na tela o tipo dessas variáveis. Escreva em um comentário de código.
7. Para finalizar, imprima na tela a mensagem: "Olá 'nome', você tem 'idade'anos". Onde 'nome' e 'idade' são os valores que o usuário inseriu.*/



let nome
let idade

console.log(typeof nome, typeof idade) 

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")


console.log(typeof nome, typeof idade) 

console.log("Olá", nome + ", você tem", idade + " anos")
