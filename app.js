// Builder Pattern

class CarBuilder {
  constructor(name) {
    this.car = { name };
  }

  addEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  addWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build() {
    return this.car;
  }
}

const car = new CarBuilder('Audi').addEngine('Audi Engine').addWheels(4).build();
console.log(car); // {name: 'Audi', engine: 'Audi Engine', wheels: 4}
