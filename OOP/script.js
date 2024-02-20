function Car(name, color, speed) {
  this.name = name;
  this.color = color;
  this.speed = speed;
  this.drive = function () {
    console.log(this.name + ' is driving');
  };
}

const car1 = new Car('bmw', 'white', 200);
const car2 = new Car('audi', 'black', 250);

console.log(car1.speed);
car1.drive();

console.log(car2.speed);
car2.drive();
