// 1 gerar num aleatorio
function generateRandomNumber() {
  return Math.floor(Math.random() * 60) + 1;
}

// 2 gerar um jogo
function generateGame() {
  let megaSenaDraw = [];

  for (let index = 0; index < 6; index += 1) {
    //pegar um numero aleatorio
    let randomNumber = generateRandomNumber();

    //colocar o numero aleatorio dentro do array
    megaSenaDraw.push(randomNumber);
  }

  return megaSenaDraw;
}

console.log(generateGame())

// 3 Conferir o jogo da megasena
// voce precisa do jogo que vc fez
// voce precisa do jogo da megasena
let resultMegaSenaByLuigiBaricelli = generateGame();

// operacao pra conferir o jogo

// quantidade de acertos

function checkMegaSenaResult(result, game) {
  let numberOfHits = 0;

  for (let index = 0; index < result.length; index += 1) {
    let drawNumber = result[index];
    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
      let olivaGameNumber = game[gameIndex];
      //console.log(drawNumber + ': ' + olivaGameNumber);
      if (drawNumber === olivaGameNumber) {
        numberOfHits += 1;
      }
    }
  }
  return numberOfHits;
}

let olivaGame = [56, 51, 4, 22, 10, 13];
let alexandreGame = generateGame();



console.log('O jogo do Olive foi: ' + checkMegaSenaResult(resultMegaSenaByLuigiBaricelli, olivaGame));

console.log('O jogo do Alexandre foi: ' + checkMegaSenaResult(resultMegaSenaByLuigiBaricelli, alexandreGame));




let olivaGame = [56, 51, 4, 22, 10, 13];

let firstNumber = generateRandomNumber();
let secondtNumber = generateRandomNumber();
let thirdNumber = generateRandomNumber();
let fourthNumber = generateRandomNumber();
let fifthNumber = generateRandomNumber();
let sixtNumber = generateRandomNumber();

let megaSenaNumbers = [firstNumber, secondtNumber, thirdNumber, fourthNumber, fifthNumber, sixtNumber];

let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = megaSenaNumbers[index];
  for (let gameIndex = 0; gameIndex < olivaGame.length; gameIndex += 1) {
    let olivaGameNumber = olivaGame[gameIndex];
    //console.log(drawNumber + ': ' + olivaGameNumber);
    if (drawNumber === olivaGameNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('O jogo do Olive foi: ' + olivaGame);
console.log('O sorteio da Mega foi: ' + megaSenaNumbers);
console.log('O numero de acertos foi: ' + numberOfHits)