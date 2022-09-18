"use strict";
/* 2. Escreva um algoritmo que armazene o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores. O
algoritmo deve fazer uma validação para que as porcentagens dos votos
armazenados (brancos, nulos e válidos) respeitem o limite do número
total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
válidos não seja maior que o número total de eleitores. */
const numeroEleitores = 1000;
let votosBrancos = 200;
let votosNulos = 400;
let votosValidos = 400;
function percentual() {
    const percentualVotosBrancos = 100 * (votosBrancos / numeroEleitores);
    const percentualVotosNulos = 100 * (votosNulos / numeroEleitores);
    const percentualVotosValidos = 100 * (votosValidos / numeroEleitores);
    console.log(`Total de eleitores: ${numeroEleitores}\nVotos brancos: ${percentualVotosBrancos}%\nVotos nulos: ${percentualVotosNulos}%\nVotos válidos: ${percentualVotosValidos}%`);
}
const validacao = votosBrancos + votosNulos + votosValidos <= numeroEleitores
    ? percentual()
    : console.log(`Dados inválidos!`);
