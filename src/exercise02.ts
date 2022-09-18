/* 2. Escreva um algoritmo que armazene o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores. O
algoritmo deve fazer uma validação para que as porcentagens dos votos
armazenados (brancos, nulos e válidos) respeitem o limite do número
total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
válidos não seja maior que o número total de eleitores. */

const numberVoters: number = 1000;
let whitheVotes: number = 200;
let nullVotes: number = 400;
let validVotes: number = 400;

function percentageCalc() {
  const percentageWhiteVotes: number = 100 * (whitheVotes / numberVoters);
  const percentageNullVotes: number = 100 * (nullVotes / numberVoters);
  const percentageValidVotes: number = 100 * (validVotes / numberVoters);

  console.log(
    `Total de eleitores: ${numberVoters}\nVotos brancos: ${percentageWhiteVotes}%\nVotos nulos: ${percentageNullVotes}%\nVotos válidos: ${percentageValidVotes}%`
  );
}

const validation: void =
  whitheVotes + nullVotes + validVotes <= numberVoters
    ? percentageCalc()
    : console.log(`Dados inválidos!`);
