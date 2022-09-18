"use strict";
/*
8. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício
assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante.
Caso o número recebido não esteja neste intervalo imprimir “Dia não
reconhecido”.
*/
const dayOfTheWeek = 2;
if (dayOfTheWeek === 1) {
    console.log("Domingo");
}
else if (dayOfTheWeek === 2) {
    console.log("Segunda");
}
else if (dayOfTheWeek === 3) {
    console.log("Terça");
}
else if (dayOfTheWeek === 4) {
    console.log("Quarta");
}
else if (dayOfTheWeek === 5) {
    console.log("Quinta");
}
else if (dayOfTheWeek === 6) {
    console.log("Sexta");
}
else if (dayOfTheWeek === 7) {
    console.log("Sábado");
}
else {
    console.log("Desculpe, digite um número de 1 a 7.");
}
