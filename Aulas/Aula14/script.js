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

//Atribui retor à uma variável
const areaCalculada = calcularArea(2, 3)

//Imprime retorno no console
console.log(calcularArea(2, 3))
*/ 

//1
function soma2(a, b) {
    return a + b 
}
const resultado = soma2(5, 7) 
console.log("Resultado da soma:", resultado)

//2
function novoArrayDivido(arr) {
    const primeiro = arr[0] / 2
   const ultimo = arr[arr.length - 1] / 2
   return [ultimo, primeiro]
}

const numeros = [10, 20, 30, 40]
const resultadoArray = 
novoArrayDivido(numeros)

console.log("Novo array:", resultadoArray)
