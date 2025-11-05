/*
//Declarção da função
function imprimirOlaMundo() {
    console.log("Olá Mundo")
}

//Invocação da Função 
for(let i=0; i<3; i++){
    imprimirOlaMundo()
}


function imprimirBemVindo() {
    console.log("Bem Vindo Turma 252-N")
}
imprimirBemVindo()

function somaDosNumeros(numero1, numero2){
    const soma = numero1 + numero2
    console.log("A soma é:", soma)
}
somaDosNumeros(2, 5)

function dobroDosNumeros() {
    let numero = 6
    let numeroDobro = numero *2
    console.log(`O dobro de: ${numero} é ${numeroDobro}`)
}
dobroDosNumeros()




function nome(nome) {
    console.log(`Olá ${nome}`)
}
nome("Joao Pedro"), nome("Joao Vitor"), nome("Joao Gabriel")

function soma1(num1, num2) {
    let soma1 = num1 + num2 
    console.log(soma1)
}
soma1(2,6)

//Escopo Global 
const a = 1

function imprimirVariavel() {
    //Escopo Local
    const b = 2 
    console.log("A variável a:", a)
    console.log("A variável b:", b)
}
//Invoca Função
imprimirVariavel()
console.log("A variável a:", a)
console.log("A variável b:", b)


function calcularArea (altura, largura) {
    const area = altura * largura
    return area
}
const areaCalculada = calcularArea(2, 3)

console.log(calcularArea(2, 3))
*/
function numeros(number1, number2){
    const soma2 = number1 + number2
    return soma2
}