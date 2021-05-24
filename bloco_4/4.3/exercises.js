/* 1 - imprimir na tela um quadrado feito de asteriscos de lado de tamanho n
/* n = 5

*****
*****
*****
*****
*****

let n = 50;
let line = '';
if (n >= 1) {
  for (let index = 0; index < n; index += 1) {
      for (let index2 = 0; index2 < n; index2 += 1) {
      line += '*'; 
      }
    console.log(line);
    line = '';
  }
} else {
  console.log('n deve ser maior que 1');
}
*/ 



/* 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****


let n = 5;
let line = '';
if (n >= 1) {
  for (let index = 0; index < n; index += 1) {
      for (let index2 = 0; index2 < index + 1; index2 += 1) {
      line += '*'; 
      }
    console.log(line);
    line = '';
  }
} else {
  console.log('n deve ser maior que 1');
}
*/

/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
*/

let n = 5;
let asterisco = '*';
let line = ' ';
let space = ' ';
if (n >= 1) {
  for (let index = 0; index < n; index += 1) {
        for (let index2 = 1; index2 < n - index; index2 += 1) {
          line = space + asterisco; 
        }
    console.log(space, line);
    space = ' ';

  }
} else {
  console.log('n deve ser maior que 1');
}