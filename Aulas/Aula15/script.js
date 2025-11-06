const mensagem = () => {
    console.log("Bem Vindo Turma 25-2N")
}

mensagem ()

const somar = () => {
    const num1 = 8
    const num2 = 12
    const resultado = num1 + num2
    console.log("A soma é:", resultado)
}

somar()

const dobrar = () => {
    const numero = 5
    const resultado2 = numero *2
    console.log(`O dobro de ${numero} é ${resultado2}`)
}

dobrar()

const determinaMonstro = (temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) => {
    if (temSedeDeSangue && temPeleGelada && ! brilhaAoSol) {
        return "É um vampiro"
    }
    else if (transformaComLuaCheia) {
        return "É um Lobisomem"
    }
    else {
        return "É um humano"
    }
}

console.log(determinaMonstro(true, false, false, true))
console.log(determinaMonstro(false, true, false, false ))
console.log(determinaMonstro(false, false, false, false))