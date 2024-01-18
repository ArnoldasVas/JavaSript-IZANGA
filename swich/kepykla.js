let darboVal = '8';
let vienoDarbKepalaiPerVal = '10';
let darbuotojai = '8';
let kepaloSavik = '0.5';
let kepaloPardKain = '2';
let dienosUzsakymas = '1000';

let kepPaerVisaDiena = vienoDarbKepalaiPerVal * darboVal * darbuotojai;
console.log('kepalai per visa diena', kepPaerVisaDiena);

let visuKepSavikaina = kepPaerVisaDiena * kepaloSavik;
console.log('visu kepalu savikaina', visuKepSavikaina);

let pelnoDalis = kepaloPardKain * kepPaerVisaDiena - kepaloSavik;
console.log('pelno dalis', pelnoDalis);

let kepiniuTrukumas = dienosUzsakymas - kepPaerVisaDiena;
console.log('truksta kepiniu iki uzsakymo', kepiniuTrukumas);

if (dienosUzsakymas <= kepPaerVisaDiena) {
  console.log('spes iskepti');
} else if (dienosUzsakymas - kepPaerVisaDiena) {
  console.log('truksta kepiniu');
}
