//João Pedro Borba e Felipe Schunk
//Array para armazenar os personagens
let personagens = []

//Função para cadastrar personagens
function cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
    const personagem = {
        nome,
        classe,
        nivel,
        hp,
        habilidades,
        historicoAcoes : []
    }

    personagens.push(personagem)
    console.log("Personagem cadastrado com sucesso")
}

//Função para realizar ações 
function realizarAcao(nome, acao) {
    const personagem = buscarPorNome(nome)

    if (personagem) {
        personagem.historicoAcoes.push(acao)
        console.log(`${personagem.nome} Realizou a ação: ${acao}`)
    } else {
        console.log("Personagem não encontrado")
    }
}

//Função de buscar por nome
function buscarPorNome(nome) {
    return personagens.find(p => p.nome === nome)

}

//Exibir personagens por nome
function mostrarPersonagem(nome) {
    const personagem = buscarPorNome(nome)

    if (personagem) {
        console.log(personagem)
    } else {
        console.log("Personagem não encontrado")
    }
}

//Função para excluir um personagem
function excluirPersonagem(nome) {
    const index = personagens.findIndex(p => p.nome === nome)  //findindex para retornar o primeiro indice do primeiro elemento da array
    if (index !== -1) {
        personagens.splice(index, 1) //usar o splice para remover um personagem
        console.log("Personagem excluido com sucesso")
    } else {
        console.log("Personagem não encontrado")
    }
}

//Listar todos os personagens 
function listarPersonagens() {
    console.table(personagens)
}

//Vericar status do personagem
function VericarStatus(nome) {
    const personagem = buscarPorNome(nome)

    if (personagem) {
        console.log(`Status do personagem: ${personagem.nome}`)
        console.log(`HP: ${personagem.hp}`)
        console.log(`Habilidades: ${personagem.habilidades.join(", ")}`) //usando para juntar todos os elementos da array em uma string e retornar esta string.
    } else {
        console.log("Personagem não encontrado")
    }
}

cadastrarPersonagem("Aragorn", "Herói", 10, 250, ["Espada", "Liderança"])
cadastrarPersonagem("Gandalf", "Mago", 20, 500, ["Magia", "Sabedoria"])
cadastrarPersonagem("Legolas", "Arqueiro", 5, 120, ["Expert no Arco e Flecha"])

listarPersonagens()

realizarAcao("Gandalf", "usar magia poderosa")
realizarAcao("Aragorn", "Atacar")
realizarAcao("Legolas", "Atacar")

mostrarPersonagem("Gandalf")

VericarStatus("Aragorn")

excluirPersonagem("Legolas")

listarPersonagens() 