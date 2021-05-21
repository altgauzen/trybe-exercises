let notaEmPorcentagem = 110;

if (notaEmPorcentagem >= 90 && notaEmPorcentagem < 100) {
  console.log("Conceito A");
}
else if (notaEmPorcentagem >= 80 && notaEmPorcentagem < 90) {
  console.log("Conceito B");
}
else if (notaEmPorcentagem >= 70 && notaEmPorcentagem < 80) {
  console.log("Conceito C");
}
else if (notaEmPorcentagem >= 60 && notaEmPorcentagem < 70) {
  console.log("Conceito D");
}  
else if (notaEmPorcentagem >= 50 && notaEmPorcentagem < 60) {
  console.log("Conceito E");
}  
else if (notaEmPorcentagem >= 0 && notaEmPorcentagem < 50) {
  console.log("Conceito F");
}  
else {
  console.log("Fora do intervalo de 0 a 100");
}
