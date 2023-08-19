// Strategy Pattern
// Shipping Strategy - Client can go with any pattern to check cost
// Delivery, Ekart Strategies
// Cart

class ShippingStrategy {
  cost(weight) {
    throw new Error('Throw Error - If This Method Is Not Overidden');
  }
}

class Delhivery extends ShippingStrategy {
  cost(weight) {
    return 2 * weight;
  }
}

class Ekart extends ShippingStrategy {
  cost(weight) {
    return 5 * weight;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(name, cost, weight) {
    this.items.push({
      name,
      cost,
      weight,
    });
  }

  buy(shippingStrategy) {
    const totalItemCost = this.items.reduce((acc, curr) => acc + curr.cost, 0);
    const totalItemWeight = this.items.reduce((acc, curr) => acc + curr.weight, 0);

    const totalCost = totalItemCost + shippingStrategy.cost(totalItemWeight);
    return totalCost;
  }
}

const myCart = new ShoppingCart();
myCart.add('meat', 10, 500);
myCart.add('masala', 20, 250);
myCart.add('veggies', 50, 1250);
const deliveryCost = myCart.buy(new Delhivery());
const ekartCost = myCart.buy(new Ekart());
if (deliveryCost > ekartCost) {
  console.log('Go with Delhivery');
} else {
  console.log('Go with Ekart');
}
