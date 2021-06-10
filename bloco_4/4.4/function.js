/*agrupador de codigos que pode ter dependencias (parametro ou argyumentos)

function greet(param1, param2, .....) {

}

*/
function greet(nome, age) {
  return 'E ai ' + nome + '. Tudo bem com voce? Voce tem ' + age + ' anos.';
}
let greetings = greet('Alexandre Altgauzen', 48);

console.log(greetings)