"use strict";
/*
3. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:

a vista ... desconto de 2.5% sobre o preço de tabela;
de 2 até 5 vezes preço de tabela, sem desconto ou acréscimo;
de 6 até 10 vezes juros de 6% sobre o preço de tabela;
de 11 até 15 vrzes juros de 13% sobre o preço de tabela;

Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagemnto será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.
*/
const priceTable = 1500;
const installments = 12;
const valueInstallments = Number((priceTable / installments).toFixed(2));
if (installments === 1) {
    let payments = priceTable - priceTable * (2.5 / 100);
    console.log(`Preço do produto: R$${priceTable},00\nPagamento à vista. Desconto de 2.5%\n Total da compra: R$${payments}`);
}
else if (installments <= 5) {
    console.log(`Preço do produto: R$${priceTable},00\nPagamento feito em x${installments} vezes de R$${valueInstallments}.\n Total da compra: R$${priceTable},00`);
}
else if (installments <= 10) {
    let payments = priceTable + priceTable * (6 / 100);
    console.log(`Preço do produto: R$${priceTable},00\nPagamento feito em x${installments} vezes de R$${valueInstallments}.\n Total da compra: R$${payments},00`);
}
else if (installments <= 15) {
    let payments = priceTable + priceTable * (13 / 100);
    console.log(`Preço do produto: R$${priceTable},00\nPagamento feito em x${installments} vezes de R$${valueInstallments}.\n Total da compra: R$${payments},00`);
}
else {
    console.log(`Desculpe, não temos essa opção de pagamento.`);
}
