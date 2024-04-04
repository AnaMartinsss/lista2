/* Contagem regressiva: Crie um algoritmo que inicie uma contagem regressiva a partir de
um número fornecido pelo usuário e termine em 0, exibindo cada número no processo.*/

function iniciarContagemRegressiva(numeroInicial) {
    
    if (isNaN(numeroInicial) || numeroInicial <= 0 || !Number.isInteger(numeroInicial)) {
        console.log("Por favor, insira um número inteiro positivo válido para iniciar a contagem regressiva.")
        return
    }

   
    console.log("Contagem regressiva iniciada:")
    for (let i = numeroInicial; i >= 0; i--) {
        console.log(i)
    }
    console.log("Contagem regressiva concluída.")
}

let numeroInicial = Number (prompt("Insira um número inteiro positivo para iniciar a contagem regressiva:"))


iniciarContagemRegressiva(numeroInicial)