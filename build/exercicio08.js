"use strict";
/*
8. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício
assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante.
Caso o número recebido não esteja neste intervalo imprimir “Dia não
reconhecido”.
*/
const diaDaSemana = 2;
if (diaDaSemana === 1) {
    console.log("Domingo");
}
else if (diaDaSemana === 2) {
    console.log("Segunda");
}
else if (diaDaSemana === 3) {
    console.log("Terça");
}
else if (diaDaSemana === 4) {
    console.log("Quarta");
}
else if (diaDaSemana === 5) {
    console.log("Quinta");
}
else if (diaDaSemana === 6) {
    console.log("Sexta");
}
else if (diaDaSemana === 7) {
    console.log("Sábado");
}
else {
    console.log("Desculpe, digite um número de 1 a 7.");
}
