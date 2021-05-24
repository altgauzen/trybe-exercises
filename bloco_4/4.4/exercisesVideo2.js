// pedidos de pizza
let pizzas = {
  sabor: 'palmito',
  preco: 39.90,
  bordaCatupiry:true
};
for (let key in pizzas) {
  console.log(pizzas[key]);
};
console.log('***************************');
for (let key in pizzas) {
  console.log(key);
};
console.log('***************************');
for (let key in pizzas) {
  console.log(pizzas.preco);
};
console.log('***************************');
for (let key in pizzas) {
  console.log(pizzas['bordaCatupiry']);
};
console.log('***************************');
for (let key in pizzas) {
  console.log(pizzas[key]);
};
console.log('***************************');
console.log('***************************');

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  console.log(key);
}
console.log('***************************');
for (let key in pizzasDoces) {
  console.log(pizzasDoces);
}
console.log('***************************');
for (let key in pizzasDoces) {
  console.log(pizzasDoces[key]);
}
console.log('***************************');
for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}
console.log('***************************');
console.log('***************************');
console.log('***************************');
let cars = ['Saab', 'Volvo', 'BMW'];
for (let index in cars) {
  console.log(cars[index]);
}
console.log('***************************');
console.log('***************************');
console.log('***************************');
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
for (let index in car) {
  console.log(index, car[index]);
}