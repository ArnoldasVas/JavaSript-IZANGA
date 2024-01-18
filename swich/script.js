let carColor = 'red';

switch (carColor) {
  case 'red':
    console.log('car is red');
    break;
  case 'green':
    console.log('car is green');
    break;
  default:
    console.log('car is yelov');
    break;
}
console.log();

let ticket = '2';
switch (ticket) {
  case '1':
    console.log('vartotojas laimejo vandens');
    break;

  case '2':
    console.log('vartotojas laimejo limonada');
    break;

  case '3':
    console.log('vartotojas laimejo arbata');
    break;

  case '4':
    console.log('vartotojas laimejo kava');
    break;

  default:
    console.log('nera tokio bilieto');
    break;
}
console.log();

let pirmas = 3;
let antras = 2;
let trecias = 3;
let rezultatas = 0;

switch (pirmas) {
  case 1:
    rezultatas = pirmas + antras + trecias;
    console.log(rezultatas);
    break;
  case 2:
    rezultatas = antras * trecias;
    console.log(rezultatas);
    break;
  case 3:
    rezultatas = pirmas * pirmas;
    console.log(rezultatas);
    break;
  default:
    console.log('nei vienas netinka');
    break;
}

let klaida = 'b';
switch (klaida) {
  case 'a':
    console.log('pirma klaida');
    break;
  case 'b':
    console.log('antra klaida');
    break;
  case 'c':
    console.log('trecia klaida');
    break;

  default:
    console.log('klaidu nera');
    break;
}
