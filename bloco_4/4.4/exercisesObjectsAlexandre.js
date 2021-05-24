// 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem Vinda, ' + info.personagem)

// 2

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim';
console.log(info)

//  3 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim';
for (let key in info) {
  console.log(key);
}

// 4 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim';
for (let key in info) {
  console.log(info[key]);
}

// 5 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim';
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};
info2.recorrente = 'Sim';
  for (let key in info) for (let key2 in info2)  {
    let margarida = (info[key]);
    let tioPatinhas = (info2[key2]);
    console.log(margarida + ' e ' + tioPatinhas);
  }