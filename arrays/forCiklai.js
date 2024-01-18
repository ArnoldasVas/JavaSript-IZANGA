// /=================================

// for(let kintamasis of masyvas)

// /=======================================
// let animals = ['cat', 'dog', 'mouse', 'bird'];

// for (let i = 0; i < animals.length; i++) {
//   console.log('indeksas:', i, 'reiksme:', animals[i]);
// }

// for (let value of animals) {
//   console.log(value);
// }

// for (let value of animals) {
//   console.log(value);
// }
// console.log('===================');
// let zodziai = ['tvora', 'medis', 'namas'];
// let indeksas = 0;
// for (let daiktai of zodziai) {
//   console.log('indeksas', indeksas, 'zodis', daiktai);
//   indeksas++;
// }
// console.log();
// // ....................................

// let pirkiniai = ['pienas', 'vanduo', 'druska', 'duona'];
// console.log('pirkiniu kiekis', pirkiniai.length);

// for (let i = 0; i < pirkiniai.length; i++) {
//   console.log('--', pirkiniai[i]);
// }
// console.log();
// // ....................................

// let pazymiai = [5, 6, 7, 8];
// let vidurkis;
// let suma = 0;

// for (let pazimys of pazymiai) {
//   suma = suma + pazimys;
//   console.log('pazimys', pazimys);
// }
// vidurkis = suma / pazymiai.length;
// console.log('vidurkis', vidurkis);
// console.log();

// let projektai = ['statyba', 'kasimas', 'griovimas', 'remontas'];
// for (i = 0; i < projektai.length; i++) {
//   console.log(i + 1, projektai[i]);
// }

// let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let suma = 0;
// for (const sk of skaiciai) {
//   if (sk > 5) console.log('daugiau uz 5', sk);
// }
// console.log();
// /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NESIGAVO SUM KURI DALINASI IS 4
// /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let skaiciai = [];
// let dalin4Suma = 0;
// let dalinIs4 = 0;
// let i = 0;
// for (let i = 0; i < 10; i++) {
//   let atsitiktinis = Math.floor(Math.random() * 10);
//   skaiciai.push(atsitiktinis);
//   console.log('atsitiktiniai', skaiciai);
// }
// for (let i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] % 4 == 0) {
//     dalinIs4 += skaiciai[i];
//   }
// }

//   dalinIs4 = skaiciai % 4 == 0;
//   console.log('skaiciai dal is 4', dalinIs4);
//   dalin4Suma += skaiciai[i];

// console.log(skaiciai);
// console.log('dalinasi is 4', dalin4Suma);
// // /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log();
// /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NEPAVYKO ISVESTI SKAICIU KURIE DIDESNI NEI VIDURKIS
// /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let pazymiai = [];
// let suma = 0;
// let vidurkis = 0;
// for (let i = 0; i < 10; i++) {
//   let atsitiktinis = Math.floor(Math.random() * 10) + 1;
//   pazymiai.push(atsitiktinis);
// }
// for (let pazimys of pazymiai) {
//   suma = suma + pazimys;
//   console.log('pazimys', pazimys);
// }
// vidurkis = suma / pazymiai.length;
// didesnNeiVid = pazymiai > vidurkis;
// console.log('vidurkis', vidurkis);
// console.log('didesni nei vidurkis', didesnNeiVid);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log();

let zodziai = ['medis', 'namas', 'kaminas', 'stoglangis'];

for (let i = 0; i < zodziai.length; i++) {
  console.log('zodzio', zodziai[i], 'raidziu kiekis', zodziai[i].length);

  raidziuKiekis = zodziai.length + zodziai[i].length;
}
console.log('raidziu kiekis', raidziuKiekis);
