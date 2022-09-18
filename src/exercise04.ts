/* 
4. Escrever um algoritmo que calcule e mostre a média aritmética dos
números lidos entre 13 e 73.
*/

let count: number = 0;
let qty: number = 0;

for (let num: number = 13; num <= 73; num++) {
  qty = qty + num;
  count++;
}
let average: number = Number((qty / count).toFixed(2));
console.log(average);
