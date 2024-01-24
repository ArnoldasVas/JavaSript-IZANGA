// // pasamdom darbuotoja
// // pasakome: susumuok du skaicius
// // darbuotojas susumuoja du skaicius
// // darbuotojas grazina rezultata
// // grazinta rezultata naudojame kur mums reikia
// ========================================
// function veiksmas(x, y) {
//   let result = x + y;
//   console.log('x skaicius yra', x);
//   console.log('y skaicius yra', y);
//   console.log('x + y =', x + y);

//   return result;
// }

// let result = veiksmas(2, 3);
// let result2 = veiksmas(5, 5);
// console.log('po funkcijos iskvietimo');
// console.log(result);
// console.log(result2);
// ==========================================
// function veiksmas(x, y) {
//   //   return x + y;
//   //   return x - y;
//   console.log(x - y);
// }
// // let result = veiksmas(6, 3);
// // let result2 = veiksmas(5, 5);
// veiksmas(6, 3);
// veiksmas(5, 5);

// // console.log(result);
// // console.log(result2);
// // skaiciuSuma(2, 3);

// function pirmaUzd() {
//   console.log('vardas');
//   console.log('pavarde');
// }
// pirmaUzd();
// pirmaUzd();
// pirmaUzd();

// function antraUzd() {
//   console.log(
//     'Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį.\n Iškvieskite šią funkciją 5 kartus.'
//   );
// }
// for (let i = 0; i < 5; i++) {
//   antraUzd();
// }

// function treciaUzd1() {
//   console.log('pirma funkcija');
// }
// function treciaUzd2() {
//   console.log('antra funkcija');
// }

// function treciaUzd3() {
//   console.log('trecia funkcija');
// }
// treciaUzd1();
// treciaUzd2();
// treciaUzd3();

// function daiktas1() {
//   console.log('daiktas1');
// }
// function daiktas2() {
//   console.log('daiktas2');
// }

// function abuDaiktai() {
//   daiktas1();
//   daiktas2();
// }
// abuDaiktai();

// // ++++++++++++++++++++++++++++++++++++++++++
// console.log();
// let consolee = {
//   log: function (text) {
//     console.log(text);
//   },
// };
// consolee.log('labas');

// ++++++++++++++++++++++++++++++++++++++++
console.log();

// function penktaUzd(x, y) {
//   console.log(x + y);
// }
// for (let i = 0; i < 3; i++) {
//   penktaUzd(5, 5);
// }

// console.log();

// function septintaUzd(z) {
//   console.log(
//     `${Math.round(Math.random() * 10)} ${Math.round(Math.random() * 10) + 1} ${
//       Math.round(Math.random() * 10) + 1
//     }
//     `
//   );
// }

// for (let i = 0; i < 5; i++) {
//   septintaUzd();
// }

// function astuntaUzd() {
//   console.log(Math.round(Math.random() * 10) + 1);
// }
// for (let i = 0; i < 10; i++) {
//   astuntaUzd();
// }

// =========================================
// ANTRA DALIS
// =========================================

// function pasisveikinimas(vardas) {
//   console.log('labas', vardas);
// }
// function atsisveikinimas(vardas) {
//   console.log('viso gero', vardas);
// }
// let vardas = 'dov';
// pasisveikinimas(vardas);
// atsisveikinimas(vardas);
// console.log('++++++++++++++++++++++++++');

// function automobiliai(marke, modelis, metai, turis) {
//   console.log(
//     'automobilis',
//     marke,
//     modelis,
//     'yra:',
//     metai,
//     'm.',
//     'jo variklio darbinis turis',
//     turis,
//     '3cm'
//   );
// }
// let marke = 'BMW';
// let modelis = '550i';
// let metai = 2011;
// let turis = 4958;

// automobiliai(marke, modelis, metai, turis);
// automobiliai(marke, '335', metai, 3498);
// console.log('+++++++++++++++++++++++++++');

// function suma(x, y) {
//   console.log(`${x} + ${y} = ${x + y}`);
// }
// function skirtumas(x, y) {
//   console.log(`${x} - ${y} = ${x - y}`);
// }
// let sk1 = Math.floor(Math.random() * 10) + 1;
// let sk2 = Math.floor(Math.random() * 10) + 1;

// suma(sk1, sk2);
// skirtumas(sk1, sk2);
// console.log('++++++++++++++++++++++++++++++++++++');
// // ===========================================
// // FUNKCIJOS 4 DALIS
// // =========================================

// function sakinys() {
//   let tekstas = 'mano sakinys';
//   return tekstas;
// }
// console.log(sakinys());

// let atsakymas = sakinys();
// console.log(atsakymas);
// // =======================
// function skaicius() {
//   let skaicius = Math.floor(Math.random() * 10) + 1;

//   return skaicius;
// }

// console.log(skaicius());

// ===============================

// function ilgiausiasZodis(zodziai) {
//   console.log(zodziai);

//   let ilgiausias = '';

//   for (let i = 0; i < zodziai.length; i++) {
//     if (zodziai[i].length > ilgiausias.length) {
//       ilgiausias = zodziai[i];
//     }
//   }
//   console.log(ilgiausias);
// }
// let zodziai = ['medis', 'namas', 'obuolys', 'durys'];
// ilgiausiasZodis(zodziai);

// ================================
// =================================

let arr = [6, 8, 5, 5, 6];
let arr2 = [5, 8, 2, 1, 8];

function isPositive(pazymiai) {
  // console.log(pazymiai);

  for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] < 5) {
      // console.log('neigiamas', pazymiai[i]);
      return false;
    }
  }
  return true;
}

let atsakymas = isPositive(arr);
console.log(atsakymas);
console.log(isPositive(arr2));
