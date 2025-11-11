
/*1.Leia o código.
a) O que vai ser impresso
no console?

function minhaFuncao(variavel) {
    return variavel *5 //Retorna a variavel para o escopo global
}

console.log(minhaFuncao(2)) //Imprime 2*5 = 10, que no caso ele imprime 10
console.log(minhaFuncao(10)) //Imprime 10*= 50, que no caso ele imprime 50

/*
b) O que aconteceria se
retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

Nada será exibido  no console, porque a função só retorna o valor, mas não o imprime.

/*
2. Leia o código:
a. Explique o que essa função faz e qual é sua utilidade


let  textoDoUsuario = prompt("Insira um texto") //pede para o user inserir um texto 

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura") // return: retorna texto para o escopo global. toLoweCase: converte todos os caracteres de uma string para letras minúsculas. includes: vai verificar se a string vai conter um determinado caracter que no caso é "cenoura". 
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) //imprime: true ou false a depender da resposta do user, se houver cenoura, vai dar true, se não houver cenoura, vai dar false.

/*
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

i. Eu gosto de cenoura: true 
ii. CENOURA é bom pra vista: true 
iii. Cenouras crescem na terra: true 
*/

/*
1.Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir
uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.


function minhaMensagem() {
    console.log("Eu sou João, tenho 17 anos, moro em Lomba Grande e sou estudante.")
}
minhaMensagem()

/*
2. Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
d) Faça uma função que recebe uma mensagem(string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

//a)

function soma(a, b) {
    return a + b 
}
console.log(soma(3, 4))

//b) 

function maiorIgual(a, b) {
    return a >= b
}
console.log(maiorIgual(5, 3))

//c) 

function ehPar(numero) {
    return numero % 2 === 0
}
console.log(ehPar(8))

//d)

function mensagemDetalhada(texto) {
    console.log(texto.length, texto.toUpperCase())
}
mensagemDetalhada("Olá Mundo")

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usário inserir dois números e chame essas 4 funções com esse valores imputdos pelo usário sendo o argumento. Por fim, mostre no console o resultado das oerações:

Números Inseridos: 30 e 3 
Soma: 33
Diferença: 27
Multiplicação: 90 
Divsão: 10
 */
//Funções básicas
function soma(a, b){
    return a + b 

}
function subtração(a, b) {
    return a - b
}

function multiplicação(a, b) {
    return a * b
}

function divisão(a, b) {
    return a / b 
}
//Entrada de dados dos user
let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

//Saídas no console
console.log("Números inserídos")