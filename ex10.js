/*Desafio do Jogo de Cartas: Desenvolva um programa que simule um jogo de cartas entre
dois jogadores. Cada jogador recebe uma carta aleatoria de um baralho. O programa
deve determinar o vencedor com base no valor da carta (de 1 a 10), considerando que o
1 seja a carta mais baixa e o 10 a mais alta. Se as cartas dos dois jogadores tiverem o
mesmo valor, o jogo deve ser declarado como empate. */

function gerarNum(){
  return Math.floor(Math.random()*10) 
}

const jogador1= gerarNum
const jogador2 = gerarNum

if(jogador1 > jogador2){
    vencedor = "jogador1"
}
 else if (jogador2 < jogador1){
    vencedor = "jogador2"
 }
else if (jogador1 = jogador2){
   vencedor = "empate"
}








