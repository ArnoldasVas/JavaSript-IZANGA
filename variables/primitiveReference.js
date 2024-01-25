// primitive variables:
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol

// reference variables:
// 1. object
// 2. array
// 3. function

let number = 2;
let number2 = number;

number2 = 5;
console.log('number', number);
console.log('number2', number2);

let arr = [2, [1, 2, 3], 5, 7];
let secondArr = [8, 4, 7];
let arr2 = [...arr, ...secondArr, 2, 6654];

arr2[0] = 100;
arr2[1][0] = 100;
console.log('arr', arr);
console.log('arr2', arr2);

// object atvejis

let obj = {
  name: 'Jonas',
  age: 99,
  city: 'Vilnius',
  pet: {
    name: 'Rex',
    age: 5,
  },
};

let car = { car: 'fiat', carYear: 2000 };

let obj2 = { ...obj, ...car };

obj2.name = 'Petras';
obj2.pet.name = 'Brisius';

console.log('obj', obj);
console.log('obj2', obj2);
