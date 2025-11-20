//Criação do personagem:
const link = {
    nome : "Link",
    hp : 100,
    rupees : 300,
    armaEquipada : "Master Sword",
    inventario : ["Bumerangue", "Bomba", "Escudo", "Hylian Shield", "Arco"],
    historicoAcoes : []
}

//Dano das armas:
const danoMasterSword = 70
const danoBomba = 50
const danoBumerangue = 30

//Função de atacar:
function atacar(inimigoNome, multiplicadorDano) {
    let danoCausado = danoMasterSword * multiplicadorDano
    let acao = `Link atacou ${inimigoNome} causando ${danoCausado} de dano.`
    link.historicoAcoes.push(acao)
    console.log(acao)
  }
  
  // Chamadando função:
  atacar("Octorok", 1)
  atacar("Bokoblin", 1.5)
  
  //Chmar historico:
  console.log(link.historicoAcoes)

  //Funcão d compras:
  function comprar(custo) {
    if (link.rupees >= custo) {
        link.rupees -= custo
        link.inventario.push("Poção de vida")
        link.historicoAcoes.push("Comprou uma poção de vida.")
    } else {
        console.log("Link não tem rupees suficientes!")
    }
}
comprar(120)

//Função de cura: 

function curar() {
    const possuiPocao = link.inventario.includes("Poção de vida");
  
    if (possuiPocao && link.hp < 100) {
      link.hp += 50
      if (link.hp > 100) link.hp = 100 // evita vida passar do máximo
  
      // Remove a poção (remove apenas uma)
      const indice = link.inventario.indexOf("poção de vida")
      link.inventario.splice(indice, 1)
  
      link.historicoAcoes.push("Usou uma poção de vida e recuperou hp.")
    } else {
      console.log("Não tem poção ou hp já está cheio!")
    }
  }

 //Chamando a função já q n pediu eu vou chama-lá XD
  curar()

  //Checar o in