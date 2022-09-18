"use strict";
/*
4. Escrever um algoritmo que calcule e mostre a média aritmética dos
números lidos entre 13 e 73.
*/
let contador = 0;
let quantidade = 0;
for (let numero = 13; numero <= 73; numero++) {
    quantidade = quantidade + numero;
    contador++;
}
let media = Number((quantidade / contador).toFixed(2));
console.log(media);
