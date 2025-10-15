/*
1. Peça ao usuário que forneça três valores numéricos através de prompt:
Número de acessórios. Número de cores. Fator Brilho (note de 1 a 10).
2. Cálculo da Pontuação (Aritmétrica): Crie uma fórmula de pontuação utilizando os operadores aritmétricos (*e+). Exemplo: Pontuação=(Acessorios x5)+(Cores x3)+(Fator Brilho x10).
3. Declare uma variável metaPontuacao com o valor 80.
4. Utilize um operador (>=) para verificar apontuação. Se a pontuacaoTotal é maior ou igual à metalPontuacao.
5. Resultado (console.log): Se for aprovado, exiba uma mensagem de sucesso. Se for reprovado, utilize o operador de subtração(-) para calcular quantos pontos faltaram e exiba essa informação.


// 1. Pedir ao usuário os valores
let acessorios = Number(prompt("Digite um número de acessórios:"))
let cores = Number(prompt("Digite o número de cores:"))
let brilho = Number(prompt("Digite o fator brilho (de 1 a 10):"))

// 2. Calcular a pontuação total
let pontuacaoTotal = (acessorios * 5) + (cores * 3) + (brilho * 10)

// 3. Declarar a variável de pontuação mínima (meta)
let metaPontuacao = 80

// 4. Verificar se atingiu ou não a pontuação necessária
if (pontuacaoTotal >= metaPontuacao) {
  console.log("Parabéns. Você atingiu " + pontuacaoTotal + " pontos e foi aprovado.")
} else {
  let faltaram = metaPontuacao - pontuacaoTotal
  console.log("Você fez " + pontuacaoTotal + " pontos. Faltaram " + faltaram + " pontos para ser aprovado.")
}

/*
1. Peça ao usuário para inserir duas strings: descrição: Uma frase descrevendo o look.corPrincipal: A cor de destaque do look.
2. Use o protótipo .legth na variável descrição.
3. Crie uma variável booleana (temTamanhoAdequado) usando o operador comparador (>=) para checar se a descrição tem, por exemplo, 20 caracteres ou mais. 
4. Busca por Palavras-Chave: primeiro, use .toLowerCase() na descrição para garantir a busca não seja sensível a maiúsculas/minúsculas.
5. Utilixe o protótipo .indexOf() para verificar se a string contém as palavras-chave, por exemplo, "brilho" e "listras". Lembre-se: indeOf retorna -1 se a palavra não for encontrada. Use o comparador !== -1 para checar se foi encontrada.
6. Crie a variável booleana final (lookAprovado) combinando as verificações: Aprovacao= Tem Tamanho Adequado&&(Tem Brilho||Tem Listras).


// 1. Pedir ao usuário para inserir duas strings
let descricao = prompt("Digite uma frase descrevendo o look:")
let corPrincipal = prompt("Digite a cor de destaque do look:")

// 2. Usar o protótipo .length na variável descrição
let tamanhoDescricao = descricao.length

// 3. Verificar se a descrição tem 20 caracteres ou mais
let temTamanhoAdequado = tamanhoDescricao >= 20

// 4. Transformar a descrição para letras minúsculas
let descricaoMinuscula = descricao.toLowerCase()

// 5. Verificar se contém as palavras-chave "brilho" ou "listras"
let temBrilho = descricaoMinuscula.indexOf("brilho") !==-1
let temListras = descricaoMinuscula.indexOf("listras") !==-1

// 6. Criar a variável final combinando as verificações
let lookAprovado = temTamanhoAdequado && (temBrilho || temListras)

// Exibir o resultado no console
console.log("Descrição:", descricao)
console.log("Cor principal:", corPrincipal)
console.log("Tamanho da descrição:", tamanhoDescricao)
console.log("Tem tamanho adequado:", temTamanhoAdequado)
console.log("Contém 'brilho':", temBrilho)
console.log("Contém 'listras':", temListras)
console.log("Look aprovado:", lookAprovado)

let condicao1 = true
let condicao2 = false

if(condicao1) {
console.log("Entrei no if 1")
}

if(condicao2) {
console.log("Entrei no if 2")
}

*/
/*
1. Crie um programa que:

a) Recebe 2 números (chamaremos de num1 e num2)
b) Compara esses números entre si:
c) Imprime mensagens dizendo se os números são iguais ou diferentes.
// a) Recebe 2 números
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

// b) Compara os números
if (num1 === num2) {
  // c) Mensagem se forem iguais
  console.log("Os números são iguais.")
} else {
  // c) Mensagem se forem diferentes
  console.log("Os números são diferentes.")
}


/*

1. Crie um programa que:
a) Recebe 2 números (chamaremos de num1 e num2)
b) Compara esses números entre si:
c) Imprime mensagens dizendo se o primeiro número é maior/menor/igual ao
segundo número.



// a) Recebe 2 números
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

// b) Compara os números e c) Imprime o resultado

if(num1 > num2) {
console.log("O primeiro número é maior que o segundo.")
} else if(num1 < num2) {
  console.log("O segundo número é maior que o segundo.")
} else {
  console.log("Os dois números são iguais.")
}



let paisOrigem = prompt("Digite o seu país de origem:")

switch(paisOrigem){
  case 'Brasil' :
    console.log("Nacionalidade: Brasileira")
    console.log("Entrou na case1")
    break
    case 'EUA' :
      console.log("Nacionalidade: Norte Americano")
      console.log("Entrou na case2")
      break
      case 'India' :
        console.log("Nacionalidade: Indiano")
        console.log("Entrou na case3")
        break
        default :
        console.log("Nacionalidade não encontrada")
        break
    }

    */

    let pokemon = prompt("Escolha um Pokémon: Bulbasaur, Charmander, Squirtle.")

  
    switch(pokemon.toLowerCase()) {
      case 'bulbasaur' : 
      console.log("Planta e Veneno")
      break
      case 'charmander' :
        console.log("Fogo")
        break
        case 'squirtle' :
        console.log("Água")
        break
        default :
        console.log("Pokémon não encontrado")
    }