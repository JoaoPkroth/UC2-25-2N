/*
Contador Simples:
Escreva um programa que use um loop for para contar de 1 a 10 e exibir cada número no
console.
*/
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/*
Explicação

let i = 1 -> *Começa o contador no número 1.
i <= 10 -> *Vai até o número 10.
i++ -> *Soma +1 a cadda repetição.
console.log(i) -> *Mostra o número no console.
*/

/*
Contador de Pares:
Modifique o programa anterior para contar apenas os números pares de 1 a 20.
*/

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
}

/*
Explicação

i % 2 === 0 -> *Verifica se o número é par (ou seja, divisível por 2).
O console.log(i) -> *Vai imprimir o resultado que vai ser par. 
*/

/*
Tabuada:
Peça ao usuário um número usando prompt e exiba a tabuada desse número de 1 a 10
usando um loop for.
*/
let num = Number(prompt("Digite um número: "))

for (let i=1; i<=10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}

/*
Eplicação

Prompt() -> *Faz uma pergunta ao usuario.
Number() -> *Transforma o texto digitado em número.
console.log() -> *Impirme o resultado de cada multipilicação.
*/

/*
Soma de Números:
Peça ao usuário para inserir 5 números. Use um loop for para somar esses números e exiba
o total.
*/

let soma = 0
for (let i=1; i<=5; i++) {
    let n = parseFloat(prompt(`Digite o ${i} número: `))
    soma += n
}
console.log("A soma total é: " + soma)

/*
Explicação

soma = 0 -> *Começa o total em zero.
For -> *O for roda 5 vezes pedindo um número a cada volta.
parseFloat() -> *Permite usar número com vírgula (Ex: 2.5)

*/