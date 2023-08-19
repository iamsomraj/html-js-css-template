// Decorator Pattern
// Coffee
// MilkDecorator

class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2.5;
  }
}

const normalCoffee = new Coffee();
const normalCoffeeCost = normalCoffee.cost();
console.log(normalCoffeeCost); // 5
const coffeeWithMilk = new MilkDecorator(normalCoffee);
const coffeeWithMilkCost = coffeeWithMilk.cost();
console.log(coffeeWithMilkCost); // 7.5
