"use strict";
/*
9. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/
const precoTabelaProduto = 1500;
const numeroDeParcelas = 12;
const valorDasParcelas = Number((precoTabelaProduto / numeroDeParcelas).toFixed(2));
switch (numeroDeParcelas) {
    case 1:
        let valorTotal = precoTabelaProduto - precoTabelaProduto * (2.5 / 100);
        console.log(`Preço do produto: R$${precoTabelaProduto},00\nPagamento à vista. Desconto de 2.5%\n Total da compra: R$${valorTotal}`);
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Preço do produto: R$${precoTabelaProduto},00\nPagamento feito em x${numeroDeParcelas} vezes de R$${valorDasParcelas}.\n Total da compra: R$${precoTabelaProduto},00`);
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        let valorTotal2 = precoTabelaProduto + precoTabelaProduto * (6 / 100);
        console.log(`Preço do produto: R$${precoTabelaProduto},00\nPagamento feito em x${numeroDeParcelas} vezes de R$${valorDasParcelas}.\n Total da compra: R$${valorTotal2},00`);
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        let valorTotal3 = precoTabelaProduto + precoTabelaProduto * (13 / 100);
        console.log(`Preço do produto: R$${precoTabelaProduto},00\nPagamento feito em x${numeroDeParcelas} vezes de R$${valorDasParcelas}.\n Total da compra: R$${valorTotal3},00`);
        break;
    default:
        console.log(`Desculpe, não temos essa opção de pagamento.`);
        break;
}
