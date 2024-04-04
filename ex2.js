/*Validação de entrada de usuário: Desenvolva um programa que pe¸ca ao usuário para
inserir sua idade. Em seguida, verifique se a entrada é um número inteiro positivo.*/
 function verificarIdade(idade){
    return Number.isInteger(idade) && idade > 0 
 }

  let idade = Number(prompt("Insira sua idade:"))
 
 idade = Number(idade)

 if (verificarIdade(idade)){
    console.log("Idade válida!")
 }
 else if (verificarIdade(idade)){
    console.log("Idade inválida! Por favor, insira um número inteiro positivo.")
 }



