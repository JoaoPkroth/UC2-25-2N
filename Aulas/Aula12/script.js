/*
let i = 0 //Começo
while ( i < 10) { //Enquanto a condição fo verdade, que no caso é i <= 10 
    console.log("Loop",i) //Executa console
    i++ //Incrementa o interador
}


console.log("Chegou ao final do código")

let estomago = 0 //Começo 

while (estomago < 100) {
    console.log("Quero mais coxinha", estomago)
    estomago = estomago +10 //Igual estomago += 10
}

let soma = 0
let numero = Number(prompt("Insira vários números (0 para parar):"))

while (numero !==0) {
    soma = soma + numero
    numero = Number(prompt("Digite outro número(0 para parar):"))
}

console.log("A soma dos números é:",soma)


let c = 1

do{
    console.log("O valor C é:", c)
    c++
} while(c <= 6) 


for(let i=0 ; i<=9 ; i++) {
    console.log("O valor de i é:", i)
}


let meuArray = [10, 4, 7, 8, 200, 77]

for(let i=0 ; i<6 ; i++) {
    console.log(meuArray [i])
}

let numeros = [11, 15, 18, 14, 12, 13]
let maior = numeros[18]

for (let i=1 ; i<numeros.length ; i++) {
    if (numeros [i] > maior) {
        maior = numeros[i]
    }
}
console.log("O maior número é:", + maior)
*/
