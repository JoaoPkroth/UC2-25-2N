/*
Escreva um programa que receba um array com números e
devolva qual a soma dos números pares.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44”


let numeros1 = [11, 15, 18, 14, 12, 13] //Array
let somaPares = 0

for (let i = 0; i <=5; i++) {
    if (numeros1 [i] % 2 === 0) {
        somaPares += numeros[i]
    }
}

console.log("A soma dos números pares é " + somaPares) //Saida 44

const numeros = [100, 7, 4, 8, 10, 3, ,20, 777, 200]

for(let numero of numeros) {
    console.log(numero)
    console.log("O número é: ", numero)
}


const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagemDeUmSerDesconhecido = ""

for(let palavra of palavras) {
    mensagemDeUmSerDesconhecido += palavra + " "
}
console.log(mensagemDeUmSerDesconhecido)


/*
Atividades para fazer:

1. Recrie o exercício da soma de números pares utilizando
for of.

O programa recebe um array com números e devolve qual
a soma dos números pares.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44”

2. Encontrar as Palavras Mais Longas em um Array Dado um array de palavras, use um loop for...of para encontrar e armazenar as palavras que têm o maior comprimento. Armazene as palavras mais longas em um array chamado palavrasMaisLongas. Se houver mais de uma palavra com o maior comprimento, inclua todas.

Exercícios de fixação 

Exercícios de interpretação de código

1.O que o código abaixo está fazendo? Qual o resultado impresso no console?
    let valor = 0
    for(let i = 0; i < 5; i++) {
        valor +=i
    }
    console.log(valor)

2. Leia o código:
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for(let numero of lista) {
        if (numero > 18) {
            console.log(numero)
        }
    }

a) O que vai ser
impresso no
console?

b) Seu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?


3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal) {
        let linha = ""
        for(let asteriscos + 0; asteriscos < quantidadeAtual +1; asteriscos++) {

        }
        console.log(linha)
        quantidadeAtual++    
    }
    
    const numeros = [11, 15, 18, 14, 12, 13]
    let somaPares = 0
    
    for (let num of numeros) {
      if (num % 2 === 0) {
        somaPares += num
      }
    }
    
    console.log(`A soma dos números pares é ${somaPares}`)
    
    const palavras = ["gato", "hipopotomonstrosesquipedaliofobia", "sol", "elefante", "girafa"]
let maiorTamanho = 0
let palavrasMaisLongas = []

for (let palavra of palavras) {
  if (palavra.length > maiorTamanho) {
    maiorTamanho = palavra.length
    palavrasMaisLongas = [palavra]
  } else if (palavra.length === maiorTamanho) {
    palavrasMaisLongas.push(palavra)
  }
}

console.log("Palavras mais longas:", palavrasMaisLongas)

let valor = 0
for (let i = 0; i < 5; i++) {
  valor += i
} // //o valor total é 10
console.log(valor)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero) //Apenas os números maiores que 18
  }
}

for (let [indice, numero] of lista.entries()) {
    console.log(`Índice: ${indice}, Número: ${numero}`)
  }
  
  const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
  let linha = ""
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
 //O resultado seria a quantidade de linhas cada uma com a respectiva quantidade de asteriscos, linha 1, um asterisco, linha 2, dois asteriscos. 

// Pergunta quantos pets o usuário tem
let quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))

// Se não tiver nenhum pet
if (quantidadePets === 0) {
  console.log("Que pena! Você pode adotar um pet!")
} else {
  // Se tiver um ou mais pets
  let nomesPets = []

  for (let i = 0; i < quantidadePets; i++) {
    let nome = prompt(`Digite o nome do seu pet número ${i + 1}:`)
    nomesPets.push(nome)
  }

  console.log("Seus pets são:", nomesPets)
}

// Array original com alguns números
let arrayOriginal = [12, 45, 8, 23, 90, 4, 33]

// a) Imprimir cada valor do array original
console.log("a) Valores do array original:")
for (let numero of arrayOriginal) {
  console.log(numero)
}

// b) Imprimir cada valor dividido por 10
console.log("\nb) Valores divididos por 10:")
for (let numero of arrayOriginal) {
  console.log(numero / 10)
}

// c) Criar novo array com números pares
let arrayPares = []
for (let numero of arrayOriginal) {
  if (numero % 2 === 0) {
    arrayPares.push(numero)
  }
}
console.log("\nc) Números pares do array:", arrayPares)

// d) Criar novo array de strings
let arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
  arrayStrings.push(`O elemento do índice ${i} é: ${arrayOriginal[i]}`)
}
console.log("\nd) Array de strings:")
console.log(arrayStrings)

// e) Imprimir o maior e o menor número do array
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let numero of arrayOriginal) {
  if (numero > maior) {
    maior = numero
  }
  if (numero < menor) {
    menor = numero
  }
}

console.log(`\ne) O maior número é ${maior} e o menor é ${menor}`)

console.log("Vamos jogar Adivinhe o Número!");

// Pessoa 1 escolhe o número (sem a outra ver)
let numeroPensado = Number(prompt("Digite o número que você pensou:"));

// Limpa a tela pra esconder o número (só funciona em alguns ambientes)
console.clear();

let chute;
let tentativas = 0;

// Enquanto o chute for diferente do número pensado...
while (chute !== numeroPensado) {
  chute = Number(prompt("Qual o seu chute?"));
  tentativas++;

  if (chute === numeroPensado) {
    console.log(`Acertou!!`);
  } else if (chute < numeroPensado) {
    console.log(`Errrrrrrrou, é maior!`);
  } else {
    console.log(`Errrrrrrrou, é menor!`);
  }
}

console.log(`O número de tentativas foi: ${tentativas}`);

// a) Primeiro jogador escolhe o número
let numeroEscolhido = Number(prompt("Jogador 1, escolha um número:"));
console.log("Vamos jogar!");

// Contador de tentativas
let tentativas = 0;
let chute;

// b) Segundo jogador tenta adivinhar
do {
  chute = Number(prompt("Jogador 2, chute um número:"));
  tentativas++;

  console.log(`O número chutado foi: ${chute}`);

  if (chute > numeroEscolhido) {
    console.log("Errou! O número escolhido é menor");
  } else if (chute < numeroEscolhido) {
    console.log("Errou! O número escolhido é maior");
  } else {
    console.log("Acertou!!!");
    console.log(`O número de tentativas foi: ${tentativas}`);
  }

} while (chute !== numeroEscolhido);

let vidas = 1;
let recursos = 0;
let rodadas = 0;

console.log("Bem-vindo(a) à Arena dos Jogos Vorazes!");
console.log("Você começa com 1 vida e 0 recursos.");

// enquanto o jogador tiver vida e não tiver 10 recursos, o jogo continua
while (vidas > 0 && recursos < 10) {
  let acao = prompt("Você quer 'explorar' ou 'descansar'?").toLowerCase();

  if (acao === "descansar") {
    vidas++;
    console.log(`Você descansou e recuperou uma vida. Agora tem ${vidas}`);
  } else if (acao === "explorar") {
    rodadas++;
    let sorte = Math.random(); // número entre 0 e 1

    if (sorte < 0.5) {
      recursos++;
      console.log(`Você encontrou um recurso! Total: ${recursos}`);
    } else if (sorte < 0.75) {
      console.log("Você encontrou um perigo! Mas sobreviveu... por enquanto");
    } else {
      vidas--;
      console.log("Um Gamemaker apareceu! Você perdeu 1 vida.");
      console.log(`Vidas restantes: ${vidas}`);
    }
  } else {
    console.log("Escolha inválida! Digite 'explorar' ou 'descansar'.");
  }
}

// fim do jogo
console.log("Fim do jogo!");
if (vidas <= 0) {
  console.log("Você morreu na arena...");
} else {
  console.log("Você venceu! Conseguiu coletar 10 recursos!");
}
console.log(`Foram exploradas ${rodadas} rodadas.`);
*/
