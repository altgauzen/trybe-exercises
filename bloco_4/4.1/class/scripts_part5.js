//switch -- case

let trafficLight = "verde";

switch (trafficLight) {
  case "vermelho":
    console.log("Pare");
    break;

  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  
  default:
    console.log("Valor não identificado");
}