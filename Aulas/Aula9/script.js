const nome = " João Pedro Kroth Borba "
const idade = 17

//aspas duplas
const frase = "O meu nome é " + nome + " e minha idade é " + idade

console.log(frase)
console.log(typeof frase)

//aspas simples
const frase2 = 'O meu nome ' + nome + ' e minha idade é '  + idade

console.log(frase2)
console.log(typeof frase2)

//template
const frase3 = `O meu nome é ${nome} e minha idade é ${idade}`

console.log(frase3)
console.log(typeof frase3)

console.log(nome.length)

const fraseMaiuscula = "TESTE"
//método toLowerCase
const fraseMinuscula = fraseMaiuscula.toLowerCase()
console.log(fraseMaiuscula, fraseMinuscula)

//método toUpperCase
const fraseUpper = fraseMaiuscula.toUpperCase()
console.log(fraseMaiuscula,fraseUpper) 

console.log(nome.trim())

const fraseCenoura = "Hoje eu comi cenoura, adoro cenoura"

console.log(fraseCenoura.includes("cenoura"))//Retorna true 
console.log(fraseCenoura.includes("batata"))//Retorna false

const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)