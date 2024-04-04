/*Calculadora simples: Crie um algoritmo que funcione como uma calculadora basica.
 Solicite dois numeros e uma operacao (adicao, subtracao, multiplicacao ou divisao) e exiba
o resultado.*/
function calculadora(num1, num2) {
    const divisao = num1 / num2;
    const multiplicacao = num1 * num2;
    const adicao = num1 + num2;
    const subtracao = num1 - num2;

    return {
        divisão: divisao,
        multiplicação: multiplicacao,
        adição: adicao,
        subtração: subtracao
    };
}

let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número:"));

const resultado = calculadora(num1, num2);

console.log("O resultado é:", resultado);