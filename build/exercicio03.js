"use strict";
/*
3. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:

a vista ... desconto de 2.5% sobre o preço de tabela;
de 2 até 5 vezes preço de tabela, sem desconto ou acréscimo;
de 6 até 10 vezes juros de 6% sobre o preço de tabela;
de 11 até 15 vrzes juros de 13% sobre o preço de tabela;

Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagemnto será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.
*/
const precoTabela = 1500;
const parcelas = 12;
const valorParcelas = Number((precoTabela / parcelas).toFixed(2));
if (parcelas === 1) {
    let pagamento = precoTabela - precoTabela * (2.5 / 100);
    console.log(`Preço do produto: R$${precoTabela},00\nPagamento à vista. Desconto de 2.5%\n Total da compra: R$${pagamento}`);
}
else if (parcelas <= 5) {
    console.log(`Preço do produto: R$${precoTabela},00\nPagamento feito em x${parcelas} vezes de R$${valorParcelas}.\n Total da compra: R$${precoTabela},00`);
}
else if (parcelas <= 10) {
    let pagamento = precoTabela + precoTabela * (6 / 100);
    console.log(`Preço do produto: R$${precoTabela},00\nPagamento feito em x${parcelas} vezes de R$${valorParcelas}.\n Total da compra: R$${pagamento},00`);
}
else if (parcelas <= 15) {
    let pagamento = precoTabela + precoTabela * (13 / 100);
    console.log(`Preço do produto: R$${precoTabela},00\nPagamento feito em x${parcelas} vezes de R$${valorParcelas}.\n Total da compra: R$${pagamento},00`);
}
else {
    console.log(`Desculpe, não temos essa opção de pagamento.`);
}
