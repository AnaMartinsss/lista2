/* Desafio do Caixa Eletronico: Escreva um programa para simular um caixa eletronico que
distribui notas de R100, R 50, R20eR 10. O programa deve solicitar ao usuario o valor
que deseja sacar e verificar se e possıvel sacar esse valor com as notas disponıveis. Se for
possıvel, o programa deve exibir a quantidade de cada nota necessaria para o saque; caso
contrario, deve informar que o saque nao e possıvel.*/ 

function sacar(valor) {
    const notas = [100, 50, 20, 10];
    const quantidadeNotas = [0, 0, 0, 0];

    let valorRestante = valor;

    for (let i = 0; i < notas.length; i++) {
        quantidadeNotas[i] = Math.floor(valorRestante / notas[i]);
        valorRestante %= notas[i];
    }

    if (valorRestante === 0) {
        console.log(`Saque de R$ ${valor} autorizado.`);
        console.log(`Quantidade de notas:`);
        for (let i = 0; i < notas.length; i++) {
            console.log(`R$ ${notas[i]}: ${quantidadeNotas[i]}`);
        }
    } else {
        console.log(`Não é possível sacar R$ ${valor}.`);
    }
}

const valorSaque = Number(prompt("Digite o valor que deseja sacar:"));

if (!isNaN(valorSaque)) {
    sacar(valorSaque);
} else {
    console.log("Valor inválido. Por favor, insira um valor numérico.");
}