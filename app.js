// Vehicle Factory
// Factory can make both Car and Bike

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

class Bike {
  constructor(brand) {
    this.brand = brand;
  }
}

class VehicleFactory {
  constructor(type, brand) {
    const vehicleMap = {
      car: Car,
      bike: Bike,
    };
    return new vehicleMap[type](brand);
  }
}

const car = new VehicleFactory('car', 'BMW');
console.log('car', car); // Car
const bike = new VehicleFactory('bike', 'Honda');
console.log('bike', bike); // Bike
