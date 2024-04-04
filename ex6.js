/* Jogo de par ou ímpar: Desenvolva um programa que permita que o usuário jogue ”par
ou ímpar” contra o computador. Gere um número aleatório e peça ao usuário para escolher par ou ímpar.
 Verifique se a soma do número do usuário e do número gerado pelo
computador é par ou ímpar e declare o vencedor.*/

function gerarNum() {
    return Math.floor(Math.random() * 100) + 1
}

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let computador = gerarNum()
let numUsuario = Number(prompt("Digite seu número"))
let escolha = prompt("Digite sua escolha (Par ou ímpar)").toLowerCase()

if (escolha !== 'par' && escolha !== 'ímpar') {
    console.log("Escolha inválida. Por favor, escolha 'par' ou 'ímpar'.")
} 
else {
    console.log("O computador escolheu o número: " + computador)
    
    const soma = computador + numUsuario
    console.log("A soma dos números é: " + soma)
    
    const resultado = verificarParOuImpar(soma)
    
    if (resultado === escolha) {
        console.log("Você venceu!")
    }
 else {
        console.log("O computador venceu!")
    }
}