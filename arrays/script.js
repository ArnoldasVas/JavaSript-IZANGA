// let cat = 'cat';
// let dog = 'dog';
// let mouse = 'mouse';
// let bird = 'bird';

// // arrays
// // !!!!!!!!!!!!!!!
// //gyvuno indexas 0       1      2        3
// let animals = ['cat', 'dog', 'mouse', 'bird'];
// console.log(animals);
// // !!!!!!!!!!!!!!!!
// // gyvunu skaicis(kiek ju)
// console.log(animals.length);

// console.log(animals);
// animals[2] = 'rat';
// // tam kad prideti nauja elementa, mae galime paimti musu sarasa ir
// // naudojant sekanti indeksa po paskutinio (siuo atvieju 4, nes paskutinis elementas
// // 'bird' turi indeksa 3) nustatyta jam reiksme:
// // animals[4] = 'lion';
// // taciau yra geresnis budas, naudojant push kmanda, ji padeda elementa i masyvo gala automatiskai
// // ir mums nereikia skaiciuoti indekso:
// animals.push('lion', 'tiger');

// console.log('array ilgis', animals.length);
// // console.log('paskutinis gyvunas', animals[5]);
// console.log('paskutinis gyvunas', animals[animals.length - 1]);

// console.log(animals);

// let myArr = [1, 4, 5, 'kate', 'bananas', true, false, animals];
// console.log(myArr);

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
// console.log('===========================');

// let produktai = ['duona', 'suris', 'vanduo', 'alus', 'pienas'];
// console.log('pirmas narys-', produktai[0]);
// console.log('paskutinis narys-', produktai[produktai.length - 1]);
// console.log('du vidurinis narys-', produktai[2]);
// console.log(produktai.length);

// console.log(produktai);
// produktai[0] = 'batonas';
// produktai[1] = 'paprika';
// console.log(produktai);
// console.log();
// let tuscias = [];
// tuscias.push('1', '2', '3', '4');
// console.log('tuscio push-as', tuscias);
// console.log('==============================');

// let ciklas = 0;
// while (ciklas <= 5) {
//   let auto = [];

//   auto.push(Math.floor(Math.random() * 5));
//   console.log(auto);
//   ciklas++;
// }
console.log('=============');

let petroPaz = [];
petroPaz.push(4, 5, 8);

let antanoPaz = [6, 8, 9];

let petroSuma = petroPaz[0] + petroPaz[1] + petroPaz[2];
let petroVidurkis = petroSuma / petroPaz.length;
console.log('petro gautas vidurkis', petroVidurkis);

let antanoSuma = antanoPaz[0] + antanoPaz[1] + antanoPaz[2];
let antanoVidurkis = antanoSuma / antanoPaz.length;
console.log('antano gautas vidurkis', antanoVidurkis);

if (petroVidurkis > antanoVidurkis) {
  console.log('petro vidurkis didesnis');
} else if (petroVidurkis < antanoVidurkis) {
  console.log('antano vidurkis didesnis');
}
console.log('=========================');

let studijuProgramos = ['matieka', 'fizika', 'algebra'];
for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(i + 1, 'studiju programa-', studijuProgramos[i]);
}
