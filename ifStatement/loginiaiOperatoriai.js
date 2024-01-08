let x = 5;
let y = 10;
let z = 15;

if (y > x && y < z) {
  console.log('z didziausias');
} else if (y > x && y > z) {
  console.log('y didziausias');
} else if (y < x && y > z) {
  console.log('x didziausias');
}

if (y < z && x < y) {
  console.log('x maziausias');
}

let a = 9;
let b = 6;
let c = 4;
let vidurkis = (a + b + c) / 3;
console.log(vidurkis);

if (vidurkis >= 8 && vidurkis <= 10) {
  console.log('vidurkis yra [8-10]');
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log('vidurkis yra [5-8)');
} else if (vidurkis < 5) {
  console.log('vidurkis <5');
}
console.log();

let g = 20;
let h = 30;

if (g > h || g == 0) {
  console.log('g>h arba =0');
}
if (h > g || h == 5) {
  console.log('h>g arba = 5');
}
if (g > h && g == 20) {
  console.log('g>h ir g= 20');
}
if (h > g && h < 100) {
  console.log('h>g ir h<100');
}
