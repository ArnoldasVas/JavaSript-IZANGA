// let student = {
//   vardas: 'Arnoldas',
//   kursas: 'JavaScript',
//   metai: 2023,
//   sodra: true,
//   pazymiai: [10, 2, 8, 4],
// };

// const students = [
//   {
//     vardas: 'Arnoldas',
//     kursas: 'JavaScript',
//     metai: 2023,
//     sodra: true,
//     pazymiai: [10, 2, 8, 4],
//   },
// ];

// // student.kursas = 'Node.js';

// // console.log(student.kursas);
// // console.log(student);
// // console.log(student.pazymiai.length);

// console.log('pirma uzduotis');
// let studentas = {
//   vardas: 'Tomas',
//   pavarde: 'Tomaitis',
//   amzius: 20,
//   ugis: 185,
//   kursas: 3,
//   mokykla: 'KVK',
// };
// console.log(studentas);

// console.log('vardas', studentas.vardas);
// console.log('amzius', studentas.amzius);
// console.log('ugis', studentas.ugis);

// console.log('antra uzduotis');

// let filmas = {
//   pavadinimas: 'Tamsa',
//   rezisierius: 'Jonas Jonaitis',
//   biudzetas: 10000,
//   uzdirboPin: 30000,
//   trukme: 150,
//   metai: 2001,

//   zanras: 'veiksmo',
//   aktoriai: [
//     'Petras Petraitis',
//     'Tomas Tomaitis',
//     'Tadas Tadaitis',
//     'Agne Agnaite',
//   ],
// };
// console.log(filmas);
// // let pelnas = 0;
// // pelnas = uzdirboPin - biudzetas;
// console.log(filmas.uzdirboPin - filmas.biudzetas);
// console.log(filmas.aktoriai.length);
// console.log(new Date(Date.now()).getFullYear() - filmas.metai);

// console.log('trecia uzduotis');

// let knyga1 = {
//   pavadinimas: 'Medziai',
//   autorius: 'Jonas Jonaitis',
//   zanras: 'literatura',
//   kaina: 2.5,
//   puslapiai: 356,
//   skyriai: ['1 skyrius', '2 skyrius', '3 skyrius'],
//   metai: 1990,
//   knygaKnigyne: true,
// };
// let knyga2 = {
//   pavadinimas: 'Lapai',
//   autorius: 'Petras Petraitis',
//   zanras: 'istorinis',
//   kaina: 3.5,
//   puslapiai: 250,
//   skyriai: ['1 skyrius', '2 skyrius', '3 skyrius', '4 skyrius'],
//   metai: 1850,
//   knygaKnigyne: false,
// };
// console.log(knyga1);
// console.log(knyga2);

// if (knyga1.puslapiai < knyga2.puslapiai) {
//   console.log('knyga 1 maziau psl.');
// } else if (knyga2.puslapiai < knyga1.puslapiai) {
//   console.log('knyga 2 maziau psl.');
// } else {
//   console.log('puslapiu vienodai');
// }

// if (knyga1.kaina * 2 > knyga2.kaina) {
//   console.log('knyga 1 tampa brangesne');
// } else if (knyga2.kaina * 2 > knyga1.kaina) {
//   console.log('knyga 2 tampa brangesne');
// }

console.log('====parduotuve=====');

const parduotuve = {
  pavadinimas: 'Maxima',
  adresas: 'Savanoriu pr',
  darboLaikas: {
    nuo: 10,
    iki: 22,
  },
};
// pirmas varijantas
console.log(parduotuve['pavadinimas']);
// antras varijantas
console.log(parduotuve.pavadinimas);
