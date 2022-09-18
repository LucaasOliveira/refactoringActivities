/* 
9. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

const priceTableProduct: number = 1500;
const numberOfInstallments: number = 12;
const valueOfInstallments: number = Number(
  (priceTableProduct / numberOfInstallments).toFixed(2)
);
let amount: number;

switch (numberOfInstallments) {
  case 1:
    amount = priceTableProduct - priceTableProduct * (2.5 / 100);
    console.log(
      `Preço do produto: R$${priceTableProduct},00\nPagamento à vista. Desconto de 2.5%\n Total da compra: R$${amount}`
    );
    break;

  case 2:
  case 3:
  case 4:
  case 5:
    console.log(
      `Preço do produto: R$${priceTableProduct},00\nPagamento feito em x${numberOfInstallments} vezes de R$${valueOfInstallments}.\n Total da compra: R$${priceTableProduct},00`
    );
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    amount = priceTableProduct + priceTableProduct * (6 / 100);
    console.log(
      `Preço do produto: R$${priceTableProduct},00\nPagamento feito em x${numberOfInstallments} vezes de R$${valueOfInstallments}.\n Total da compra: R$${amount},00`
    );

    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
    amount = priceTableProduct + priceTableProduct * (13 / 100);

    console.log(
      `Preço do produto: R$${priceTableProduct},00\nPagamento feito em x${numberOfInstallments} vezes de R$${valueOfInstallments}.\n Total da compra: R$${amount},00`
    );
    break;
  default:
    console.log(`Desculpe, não temos essa opção de pagamento.`);
    break;
}
