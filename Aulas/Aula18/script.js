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
*/
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

function adicionarPersonagem(personagens) {
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
            console.table(`Personagem "${nome}" não encontrado.`)
            return null
        }
}