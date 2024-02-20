class Car {
  constructor(name, color, speed, conditioner = true) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.conditioner = conditioner;
  }
  drive() {
    console.log(`${this.name} is driving with speed ${this.speed} km/h`);
  }
}

const car1 = new Car('bmw', 'white', 200);
const car2 = new Car('audi', 'black', 250, false);

console.log(car1.conditioner);
console.log(car2.conditioner);
// car1.drive();

// animal class

class Animal {
  constructor(name, area) {
    this.name = name;
    this.area = area;
  }

  move() {
    console.log(`${this.name} is moving in ${this.area}`);
  }
}

class Dog extends Animal {
  constructor(name, area, breed) {
    super(name, area);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} ${this.breed} bark`);
  }
}

class Cat extends Animal {
  meow() {
    this.move();
    console.log(`${this.name} meow`);
  }
}

const dog = new Dog('dog', 'land', 'bulldog');
const dog2 = new Dog('dog2', 'land', 'bulldog');
const dog3 = new Dog('dog3', 'land', 'bulldog');
const dog4 = new Dog('dog4', 'land', 'bulldog');
const cat = new Cat('cat', 'home');

// console.log(cat.name);
// console.log(cat.area);
// cat.meow();
// dog.bark();
// cat.meow();
// console.log(cat.breed);
