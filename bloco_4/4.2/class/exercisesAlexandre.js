/*1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 0; index < numbers.length; index += 1) {
    let percorreNumbers = numbers[index];
    console.log(percorreNumbers);
}


//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
    }
  console.log(sum);

/*3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = sum / numbers.length;
console.log(media);

/*4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a 
mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


if (media > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
for (let indexM = 0; indexM < numbers.length; indexM += 1) {
  if (numbers[indexM] > maiorValor) {
    maiorValor = numbers[indexM]
  }
}
  console.log(maiorValor);

//6-Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeValoresImpares = 0;
for (let indexI = 0; indexI < numbers.length; indexI += 1) {
  if (numbers[indexI] % 2 === 0) {
  } else {
    quantidadeValoresImpares += 1;
  }
}
  console.log(quantidadeValoresImpares);



//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;  

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor;
for (let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1) {
  if (numbers[indexMenor] > menorValor) {
      } else {
    menorValor = numbers[indexMenor]
  }
}
  console.log(menorValor);
*/

//8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;


let arrayVinteCinco = [];
let number = 1;
for (let index = 1; index < 26; index += 1) {
  arrayVinteCinco.push(index)
  }
  console.log(arrayVinteCinco);