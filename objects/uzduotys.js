//KETVIRTA DALIS  PIRMA UZDUOTIS
let knygos = [
  { pavadinimas: 'medziu lapai', kaina: 9.5, autorius: 'Petras Petraitis' },
  { pavadinimas: 'ezeras', kaina: 6.5, autorius: 'Ignas Ignauskas' },
  { pavadinimas: 'pievos', kaina: 4.5, autorius: 'Tadas Tadauskas' },
];
console.log(knygos);
console.log('==================');
console.log('pirma knyga:', knygos[0]);
console.log('====================');
console.log('antros knygos kaina:', knygos[1].kaina);

// KETVIRTA DALIS  ANTRA UZDUOTIS
let prekes = [
  { pavadinimas: 'vanduo', kaina: 2.3 },
  { pavadinimas: 'pienas', kaina: 1.5 },
  { pavadinimas: 'duona', kaina: 2 },
];
console.log(prekes);
// ARBA ATSKIROSE EILUTESE
for (const produktas of prekes) {
  console.log(`${produktas.pavadinimas} (${produktas.kaina}eur)`);
}
// KETVIRTA DALIS  TRECIA UZDUOTIS
console.log('==================');
let automobiliai = [
  { marke: 'BMW', modelis: '550i', metai: 2011 },
  { marke: 'VW', modelis: 'GOLF', metai: 2015 },
  { marke: 'AUDI', modelis: 'Q5', metai: 2000 },
  { marke: 'SKODA', modelis: 'FABIA', metai: 2005 },
];
for (const auto of automobiliai) {
  console.log(
    `${auto.marke} ${auto.metai} m., amzius ${
      new Date(Date.now()).getFullYear() - auto.metai
    } m.`
  );
}
// PENKTA DALIS  PIRMA UZDUOTIS
console.log('======================');
let imones = [
  {
    pavadinimas: 'Transkona',
    veikiaNuo: 1990,
    darbuotojai: 10,
    pelnasPerMetus: 23000,
  },
  {
    pavadinimas: 'Regitra',
    veikiaNuo: 1995,
    darbuotojai: 15,
    pelnasPerMetus: 25000,
  },
  {
    pavadinimas: 'Mecanic',
    veikiaNuo: 2020,
    darbuotojai: 4,
    pelnasPerMetus: 27000,
  },
];
let bendrasPelnas = 0;
let vidutinisImonesAmzius = 0;
let imoniuVisiDarbuotojai = 0;

console.log('Visos imones:');

for (const firma of imones) {
  bendrasPelnas += firma.pelnasPerMetus;
  vidutinisImonesAmzius += new Date(Date.now()).getFullYear() - firma.veikiaNuo;
  imoniuVisiDarbuotojai += firma.darbuotojai;
  console.log(
    '-',
    firma.pavadinimas,
    'dirba nuo:',
    firma.veikiaNuo,
    'turi-',
    firma.darbuotojai,
    'darbuotojus,',
    'per metus uzdirba',
    firma.pelnasPerMetus,
    'eur'
  );

  console.log(
    'imones amzius',
    new Date(Date.now()).getFullYear() - firma.veikiaNuo
  );
}
console.log();
console.log('imoniu bendras metinis pelnas:', bendrasPelnas, 'eur.');
console.log('vidutinis imones amzius', vidutinisImonesAmzius / imones.length);
// SUAPVALINAM
console.log(
  'vidutinis imones amzius',
  Math.round(vidutinisImonesAmzius / imones.length)
);

console.log('imoniu bendras darbuotoju kiekis', imoniuVisiDarbuotojai);

// SESTA DALIS  PIRMA UZDUOTIS
console.log('===================================');
let studentai = [
  {
    vardas: 'Petras',
    pavarde: 'Petrauskas',
    amzius: 26,
    pazymiai: [8, 5, 9, 4],
  },
  {
    vardas: 'Antanas',
    pavarde: 'Antanauskas',
    amzius: 20,
    pazymiai: [9, 6, 7, 3],
  },
  {
    vardas: 'Joonas',
    pavarde: 'Jonauskas',
    amzius: 30,
    pazymiai: [7, 5, 9, 8],
  },
  {
    vardas: 'Darius',
    pavarde: 'Dariauskas',
    amzius: 18,
    pazymiai: [6, 5, 8, 7],
  },
];
// sukurem kintamaji kad apskaiciuoti vidurkiu vidurki
let vidurkiuSuma = 0;
// ciklas skaiciuoja kiekvieno studento vidurki
for (const stud of studentai) {
  console.log(
    `vardas - ${stud.vardas} pavarde - ${stud.pavarde} amzius - ${stud.amzius}`
  );
  console.log(`pazymiai - ${stud.pazymiai}`);

  let suma = 0;
  for (const paz of stud.pazymiai) {
    suma += paz;
  }
  let vidurkis = suma / stud.pazymiai.length;
  vidurkiuSuma += vidurkis;

  console.log('pazymiu vidurkis', vidurkis);
  console.log();

  console.log('===================================');
}
// baige skaiciuoti kiekvieno studento vidurki
let vidurkioVidurkis = vidurkiuSuma / studentai.length;
console.log('vidurkio vidurkis', vidurkioVidurkis);
