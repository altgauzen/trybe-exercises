let olivaGame = [56, 51, 4, 22, 10, 13];

let firstNumber = Math.ceil(Math.random() * 60);
let secondtNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixtNumber = Math.ceil(Math.random() * 60);

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