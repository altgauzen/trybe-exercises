let estadoPessoaCandidata = "reprovada";

switch (estadoPessoaCandidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovado(a)");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovado(a)");
    break;
  
  default:
    console.log("Valor não se aplica");
}