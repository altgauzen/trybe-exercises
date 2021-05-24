// Posição da rainha
// array [6, 4] ou
// 2 variaveis
let queenRowPosition = 6;
let queeColummPosition = 4;

// Posição da peça oponente
let opponentRowPosition = 4;
let opponentColummPosition = 6;


// Saber se o ataque é bem sucedido
let canAttack = false;

// Calculo para saber se o ataque foi bem sucedido ou não

// Se a rainha está na mesma linha que a peça oponente ou a rainha está na mesma coluna que a peça oponente, significa que o ataque é bem sucedido.

if (queenRowPosition === opponentRowPosition || queeColummPosition === opponentColummPosition) {
  canAttack = true;
}
console.log('Ataque bem sucedido? ' + canAttack); 

// Identificar se a peça do oponente está na diagonal inferior esquerda - loop em decremento
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumm = queeColummPosition - index;

  // se a posicao da linha ou da coluna forem iguel a 0, o tabuleiro terminou. Logo termina o loop.
  if (currentQueenRow === 0 || currentQueenColumm === 0) {
      break;
  }  

      // Se a posicao current de linha e coluna estiverem na mesma posicao que a peça oponente, eu posso atacar.
    if (currentQueenRow === opponentRowPosition && currentQueenColumm === opponentColummPosition) {
      console.log('Ataque bem sucedido na diagonal inferior esquerda');
      canAttack = true;
      break;
    }
}

// Identificar se a peça do oponente está na diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition + index;
    let currentQueenColumm = queeColummPosition - index;

    // se a posicao da linha for maior que 8 ou da coluna for menor que 1, o tabuleiro terminou. Logo termina o loop.
    if (currentQueenRow > 8 || currentQueenColumm === 0) {
      break;
    }  

      // Se a posicao current de linha e coluna estiverem na mesma posicao que a peça oponente, eu posso atacar.
    if (currentQueenRow === opponentRowPosition && currentQueenColumm === opponentColummPosition) {
      console.log('Ataque bem sucedido na diagonal inferior esquerda');
      canAttack = true;
      break;
    }
  }


  // Identificar se a peça do oponente está na diagonal inferior direita

  for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition - index;
    let currentQueenColumm = queeColummPosition + index;

    // se a posicao da linha for igual a 0 ou da coluna for maior que 8, o tabuleiro terminou. Logo termina o loop.
    if (currentQueenRow === 0 || currentQueenColumm > 8) {
      break;
    }  

      // Se a posicao current de linha e coluna estiverem na mesma posicao que a peça oponente, eu posso atacar.
    if (currentQueenRow === opponentRowPosition && currentQueenColumm === opponentColummPosition) {
      console.log('Ataque bem sucedido na diagonal inferior direita');
      canAttack = true;
      break;
    }
  }





  // Identificar se a peça do oponente está na diagonal superior direita

  for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition + index;
    let currentQueenColumm = queeColummPosition + index;

    // se a posicao da linha for maior que 8 (que é a mesma coisa que igual a 9) ou da coluna for maior que 8, o tabuleiro terminou. Logo termina o loop.
    if (currentQueenRow === 9 || currentQueenColumm === 9) {
      break;
    }  

      // Se a posicao current de linha e coluna estiverem na mesma posicao que a peça oponente, eu posso atacar.
    if (currentQueenRow === opponentRowPosition && currentQueenColumm === opponentColummPosition) {
      console.log('Ataque bem sucedido na diagonal superior direita');
      canAttack = true;
      break;
    }
  }
