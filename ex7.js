/* Calculo de media ponderada: Escreva um algoritmo que calcule a media ponderada de
tres notas, sendo que a primeira nota tem peso 2, a segunda nota tem peso 3 e a terceira
nota tem peso 5.
*/
const nota1 = (prompt("Digite a nota 1:"))
const pesoNota1 = 2

const nota2 = (prompt("Digite a nota 2:"))
const pesoNota2 = 3

const nota3 = (prompt("Digite a nota 3:"))
const pesoNota3 = 5

const media = (((pesoNota1 * nota1) + (pesoNota2 * nota2) + (pesoNota3 * nota3))/ (pesoNota1 + pesoNota2 + pesoNota3))

alert(
    "A média ponderada das 3 notas é:" + media
)