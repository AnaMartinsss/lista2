/*Verificacao de ano bissexto: Escreva um algoritmo que solicite ao usuario um ano e determine se ele é bissexto ou nao.
 Um ano bissexto é aquele que é divisível por 4, exceto
para anos que sao divisıveis por 100, a menos que sejam divisıveis por 400.  */


function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


let anoUsuario = prompt("Digite um ano:");
let ano = Number (anoUsuario);


if (verificarAnoBissexto(ano)) {
    document.write(ano + " é um ano bissexto.");
} else {
    document.write(ano + " não é um ano bissexto.");
}


