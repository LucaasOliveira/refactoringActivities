"use strict";
/*
4. Escrever um algoritmo que calcule e mostre a média aritmética dos
números lidos entre 13 e 73.
*/
let count = 0;
let qty = 0;
for (let num = 13; num <= 73; num++) {
    qty = qty + num;
    count++;
}
let average = Number((qty / count).toFixed(2));
console.log(average);
