"use strict";
/*
7. Para o mesmo exercício acima insira mais uma variável a condicional,
além de saber se o motorista tem 18 anos ou mais, temos que saber
também se ele é habilitado para dirigir. Caso ele tenha idade maior ou
igual a 18 anos e possua habilitação, imprima no console “Pode dirigir”
caso contrário imprima “Não pode dirigir”.
*/
const nomeDoMotorista = "Lucas Almeida";
const idadeMotorista = 27;
const habilitado = true;
idadeMotorista > 18 && habilitado
    ? console.log("Pode dirigir.")
    : console.log("Não pode dirigir.");
