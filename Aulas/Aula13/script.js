/*
Escreva um programa que receba um array com números e
devolva qual a soma dos números pares.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44”


let numeros1 = [11, 15, 18, 14, 12, 13] //Array
let somaPares = 0

for (let i = 0; i <=5; i++) {
    if (numeros1 [i] % 2 === 0) {
        somaPares += numeros[i]
    }
}

console.log("A soma dos números pares é " + somaPares) //Saida 44

const numeros = [100, 7, 4, 8, 10, 3, ,20, 777, 200]

for(let numero of numeros) {
    console.log(numero)
    console.log("O número é: ", numero)
}


const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagemDeUmSerDesconhecido = ""

for(let palavra of palavras) {
    mensagemDeUmSerDesconhecido += palavra + " "
}
console.log(mensagemDeUmSerDesconhecido)


/*
Atividades para fazer:

1. Recrie o exercício da soma de números pares utilizando
for of.

O programa recebe um array com números e devolve qual
a soma dos números pares.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44”

2. Encontrar as Palavras Mais Longas em um Array Dado um array de palavras, use um loop for...of para encontrar e armazenar as palavras que têm o maior comprimento. Armazene as palavras mais longas em um array chamado palavrasMaisLongas. Se houver mais de uma palavra com o maior comprimento, inclua todas.

Exercícios de fixação 
Exercícios de interpretação de código
1.O que o código abaixo está fazendo? Qual o resultado impresso no console?
    let valor = 0
    for(let i = 0; i < 5; i++) {
        valor +=i
    }
    console.log(valor)

2. Leia o código:
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for(let numero of lista) {
        if (numero > 18) {
            console.log(numero)
        }
    }

a) O que vai ser
impresso no
console?

b) Seu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?


3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal) {
        let linha = ""
        for(let asteriscos + 0; asteriscos < quantidadeAtual +1; asteriscos++) {

        }
        console.log(linha)
        quantidadeAtual++    
    }
    */

    