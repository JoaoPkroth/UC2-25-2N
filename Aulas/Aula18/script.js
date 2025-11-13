/*
const pessoa = {
    nome : "Gustavo",
    idade : 17,
    comida : ["Caldo de cana com pastel", "Bolachinha do Gabriel", "Refrizinho"],
}

function adicionandoAmigo(pessoa) {
    const amigo = {
    ...pessoa,
    melhorAmigo : {
        nome : "João",
        idade : 17
    }
}

console.log(
    `O nome do caba é: ${amigo.nome} e suas comidas favoritas são: ${amigo.comida[0]}, ${amigo.comida[1]}, ${amigo.comida[2]}. Seu melhor amigo se chama: ${amigo.melhorAmigo.nome} e tem: ${amigo.melhorAmigo.idade} anos.`)
}

adicionandoAmigo(pessoa) 



const personagens = [
 {
    nome : "Yuji Itadori",
    idade : 15,
    estilo : "Conjurador de Energia Amaldiçoada",
    jujutso : ["Resistência Sobrenatural", "Flash Negro", "Impacto Divergente" ] 
}, 
{
    nome : "Satoru Gojo",
    idade : 28,
    estilo :  "Técnica do Ilimitado / Seis Olhos",
    jujutso : ["Infinito", "Reversão Vermelho", "Atração Azul", "Vazio Roxo"]
},
{
    nome : "Megumi Fushiguro",
    idade : 15,
    estilo : "Usuário Shikigami das Sombras",
    jujutso : ["Cães Divinos", "Nue", "Elefante Máximo", "Jardim das Sombras Quiméricas"]
}
]

function adicionarPersonagem(personagem) {
    personagens.push(personagem)
    console.table(`Personagem ${personagem.nome} adicionado com sucesso!`)
}

function buscarPersonagem(nome) {
    const personagem = personagens.find(p =>
        p.nome.toLowerCase() === nome.toLowerCase())

        if (personagem) {
            console.table("Personagem encontrado:")
            console.table(personagem)
            return personagem
        } else {
            console.log(`Personagem "${nome}" não encontrado.`)
            return null
        }
}

function listarPersonagens () {
    console.table("Lista de personagens de Jujutso Kaisen:")
    personagens.forEach(p => {
        console.table(`Nome: ${p.nome}`)
        console.table(`Idade: ${p.idade}`)
        console.table(`Estilo: ${p.estilo}`)
        console.table(`Jujutso: ${p.jujutso.join(", ")}`)
    })
}

listarPersonagens()

adicionarPersonagem({
    nome : "Nobara Kugisaki",
    idade :15,
    estilo : "Usuária de Feitiço de boneco",
    jujutso : ["Resonace", "Fulgor Negro", "Grampo de Cabelo", "Técnica do Boneco de Palha"]
})

buscarPersonagem("Gojo")
buscarPersonagem("Sukuna")

listarPersonagens()
*/
/*
1. Leia o código.
c
a) O que vai ser
impresso no console?


const filme = {
    nome : "Auto da Compadecida",
    ano : 2000,
    elenco : [
        "Matheus Nachtergale", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissoesHoje : [
        {Canal : "Telecine", horario : "21"},
        {Canal : "Canal Brasil", horario : "14h"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//Imprime Matheus Nachtergale e Virginia Cavendish

/*
2. Leia o código.

a) O que vai ser
impresso no console?

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?


const cachorro = {
    nome : "Juca",
    idade : 3,
    raca : "SRD"
}

const gato = {...cachorro, nome : "Juba"}

const tartaruga = {...gato, nome : gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//Imprime: Nome: 'Juca', Idade: 3, Raça: SRD / Nome: 'Juba', Idade: 3, Raça: SRD / Nome: 'Jubo', Idade: 3, Raça: SRD

//A sintaxe de propagação é comumente usada para fazer cópias superficiais de objetos

/*
3. Leia o código.

a) O que vai ser
impresso no console?

b) Explique o valor impresso no
console. Você sabe por que isso
aconteceu?


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//Vai ser impresso: False e Undefined
//

/*
1. Resolva os passos a seguir:
a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
e apelidos (um array que sempre terá exatamente três apelidos).
Depois, escreva uma função que recebe como entrada um objeto e
imprime uma mensagem no modelo abaixo:


//Exemplo de entrada
const pessoa = {
    nome : "Lucas Gabriel", 
    apelidos: ["Mestre", "Prof", "Lu"]
}

//Exemplo de saída 
"Eu sou lucas, mas pode me chamar de: Mestre, Prof ou Lu"
*/

const pessoa = {
    nome: "João",
    apelidos: ["Koro", "KoroXaein", "Jão"]
}

function apresentarPessoa(Eu) {
    console.log(`Eu sou ${Eu.nome}, mas pode me chamar de: ${Eu.apelidos[0]}, ${Eu.apelidos[1]}, ou ${Eu.apelidos[2]}`)
}

apresentarPessoa(pessoa)

