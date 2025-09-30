/*Exercicio aula 5
*/
//Exercicio 1.
/* let é uma variavel que pode ter seus valorers alterados ao decorrer do tempo. Declaramos que o valor de "a e b" são "10". Em seguida "b" tem seu valor "10" e "5".

let a = 10 //tem seu valor 10
let b = 10// tem seu valor 10

console.log(b)//imprime 10

b = 5
console.log(a, b)//imprime os valores 10 e 5

//2

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
/*
let nome
let idade

console.log(typeof nome, typeof idade) 

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")


console.log(typeof nome, typeof idade) 

console.log("Olá", nome + ", você tem", idade + " anos")
*/
/*Atividade de revisão
 2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma
variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
a) Crie três novas variáveis, contendo as respostas
b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por
exemplo:

Você está usando uma roupa azul hoje? - SIM 
*/
/*
// Fazendo as perguntas
let pergunta1 = "Você já tomou água hoje?"
let pergunta2 = "Você gosta de programação?"
let pergunta3 = "Você já estudou JavaScript antes?"

// Coletando as respostas
let resposta1 = prompt(pergunta1 + " (Sim/Não)")
let resposta2 = prompt(pergunta2 + " (Sim/Não)")
let resposta3 = prompt(pergunta3 + " (Sim/Não)")

// Imprimindo as perguntas seguidas das respostas
console.log(pergunta1 + " - " + resposta1)
console.log(pergunta2 + " - " + resposta2)
console.log(pergunta3 + " - " + resposta3)
*/
/*
3) Suponha que temos duas variáveis a e b, cada uma com um valor inicial.
let a = 10
let b = 25
Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b`
passe a ter o valor de `a`. Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b`
passaria a ser 10.
*/
/*
let a = 10
let b = 25
let c = a // guarda o valor de a

a = b     // passa o valor de b para a
b = c     // recupera o valor antigo de a para b

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/