let pecaDeXadrez = 'REI';
let pecaDeXadrezLowerCase = pecaDeXadrez.toLowerCase();

switch(pecaDeXadrezLowerCase) {
  case 'torre':
    console.log('A torre se movimenta para frente e para trás, para a direita e para a esquerda');
    break;
  case 'bispo':
    console.log('Se moimenta na diagonal');
    break;
  case 'cavalo':
    console.log('Se move em L');
    break;
  case 'rainha':
    console.log('A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.');
    break;
  case 'rei':
    console.log('O Rei movimenta-se apenas 1 casa em qualquer direção.');
    break;
  case 'peao':
    console.log('O peão só se movimenta para frente, sendo a única peça que não se move para trás.');
    break;
  default:
    console.log('Vá estudar Xadrez, essa peça não existe!!!');
}