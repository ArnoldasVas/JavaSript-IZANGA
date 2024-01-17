// let knigynas = {
//   pavadinimas: 'Knygu sala',
//   adresas: 'klaipeda',
//   plotas: 220,
//   knyguSk: 852,
//   darboVal: {
//     nuo: 8,
//     iki: 15,
//   },
//   arAtidarytas: true,
// };
// for (const key in knigynas) {
//   console.log(key, ':', knigynas[key]);
// }
// console.log();
// for (const key in knigynas) {
//   if (typeof knigynas[key] == 'number') {
//     console.log(key, knigynas[key]);
//   }
// }

console.log('=================================');

let studentas1 = {
  vardasPavarde: 'Jonas Jonaitis',
  studijuProg: 'JavaSc',
  pazymiai: [4, 5, 8, 9, 6],
};
let studentas2 = {
  vardasPavarde: 'Petras Petraitis',
  studijuProg: 'Html',
  pazymiai: [5, 6, 7, 3, 4],
};

let pazSum = 0;
for (const pazymiai of studentas1.pazymiai) {
  pazSum += pazymiai;
}
console.log(studentas1);

console.log('studentas1 paz vidurkis', pazSum / studentas1.pazymiai.length);

for (const pazymiai of studentas2.pazymiai) {
  pazSum += pazymiai;
}
console.log(studentas2);

console.log('studentas2 paz vidurkis', pazSum / studentas2.pazymiai.length);
