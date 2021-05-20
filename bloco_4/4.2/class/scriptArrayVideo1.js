/*let pizza1 = '4 queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';
*/

//let pizzas = ['4 queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate']

//pizzas[5] = 'Peito de Peru';

//pizzas.push('Gratinada');


//console.log('Menu de Sabores: ' + pizzas);

//console.log(pizzas.length); //traz tamanho do array

//console.log(pizzas.sort()); //traz em ordem alfabetica

//console.log(pizzas[0]); //traz um unico elemento atraves de um indice

/*console.log(pizzas[0]); 
console.log(pizzas[1]); 
console.log(pizzas[2]); 
console.log(pizzas[3]); 
console.log(pizzas[4]); 
console.log(pizzas[5]); 
console.log(pizzas[6]); 
console.log(pizzas[7]); 
*/

let pizzas = ['4 queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
pizzas.push('Gratinada');
pizzas.push('GratinadaII');

for (let index = 0; index < pizzas.lenght; index += 1) {
  console.log(pizzas[index]);
}
  