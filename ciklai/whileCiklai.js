// let ciklai = 0;

// while (ciklai < 5) {
//   console.log('dabartinis ciklas', ciklai);
//   ciklai++; //ciklai = ciklai +1;
// }

// let ciklai = 1;
// do {
//   console.log('do while ciklas', ciklai);
//   ciklai++;
// } while (ciklai < 6);

// let ciklai = 1;

// while (ciklai <= 20) {
//   console.log('dabartinis ciklas', ciklai);
//   ciklai++;
// }

// let ciklai = 1;

// while (ciklai <= 20) {
//   if (ciklai % 2 == 0) {
//     console.log('lyginiai', ciklai);
//   }
//   if (ciklai % 2 != 0) {
//     console.log('nelyginiai', ciklai);
//   }
//   ciklai++;
// }

// let ciklai = 25;

// while (ciklai <= 50) {
//   console.log(ciklai);
//   if (ciklai % 3 == 0) {
//     console.log('skaicius', ciklai, 'dalinasi is 3');
//   }
//   ciklai++;
// }

// let ciklai = 1;
// while (true) {
//   if (ciklai % 3 == 0 && ciklai % 5 == 0) {
//     console.log('skaicius dalinasi is 3 ir is 5,', ciklai);
//     break;
//   }
//   ciklai++;
// }

// let ciklai = 1;
// let suma = 0;

// while (ciklai <= 100) {
//   if (ciklai % 2 == 0) {
//     suma = suma + ciklai;
//   }

//   ciklai++;
// }
// console.log('lyginiu skaiciu suma', suma);

// let sk = 1;
// while (sk < 5) {
//   console.log('skaicius', sk, 'jo kvadratas', sk * 2);
//   sk++;
// }

let ciklas = 1;
let suma = 0;

// for (let ciklas = 1; ciklas <= 10; ciklas++)
while (ciklas <= 6) {
  let random = Math.round(Math.random() * 6);
  console.log('rndm skaiciai', random);
  suma = suma + random;
  ciklas++;
}

console.log('suma', suma);

// let automobilis = 18;
// let variklis = 14;
// let padangos = 20;

// while (automobilis > 0 || variklis > 0 || padangos > 0) {
//   console.log(
//     'turimos prekes',
//     automobilis,
//     'automobilis',
//     variklis,
//     'variklis',
//     padangos,
//     'padangos'
//   );
//   let nupirkoAuto = Math.ceil(Math.random() * automobilis);
//   let nupirkoVarikl = Math.ceil(Math.random() * variklis);
//   let nupirkoPadang = Math.ceil(Math.random() * padangos);
//   console.log(
//     'nupirko prekiu',
//     nupirkoAuto,
//     'automobilis',
//     nupirkoVarikl,
//     'variklis',
//     nupirkoPadang,
//     'padangos'
//   );

//   if (automobilis) automobilis -= nupirkoAuto;

//   if (variklis) variklis -= nupirkoVarikl;

//   if (padangos) padangos -= nupirkoPadang;
// }
