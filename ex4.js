/*Conversão de moeda: Escreva um programa que converta um valor em dólares para outra
moeda (por exemplo, real, euro, libra) com base na escolha do usuário. Use taxas de
câmbio fixas*/

const taxasDeCambio = {
    real: 5.25,    // 1 dólar = 5.25 reais
    euro: 0.85,    // 1 dólar = 0.85 euros
    libra: 0.72    // 1 dólar = 0.72 libras
};

function converterDolar(valor, moedaAlvo) {
    if (taxasDeCambio.hasOwnProperty(moedaAlvo)) {
        const taxa = taxasDeCambio[moedaAlvo];
        const valorConvertido = valor * taxa;
        return valorConvertido + ' ' + moedaAlvo();
    } else {
        return 'Moeda não suportada';
    }
}


const valorEmDolares = Number (prompt("Digite o valor em dólares:"));
const moedaAlvo = prompt("Digite a moeda de destino (real, euro, libra):").toLowerCase();


if (!isNaN(valorEmDolares)) {
    const resultado = converterDolar(valorEmDolares, moedaAlvo);
    console.log(`$${valorEmDolares} é equivalente a ${resultado}`);
} else {
    console.log("Por favor, insira um valor numérico válido.");
}