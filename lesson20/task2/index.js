class Vehicle {
  constructor(name, numberOfWeels) {
    this.hasWheels = false;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}
class Ship extends Vehicle {
  constructor(name, numberOfWeels, maxSpeed) {
    super(name, false);
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

const ship1 = new Ship('Aurora', 0, 19);
