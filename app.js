// Calculator function that allows chaining operations
// and returns the final result.
// Example usage: plus(10).minus(5).plus(3).minus(2).value() should return 6

function calculator(value) {
  let result = value;
  return {
    plus: function (plusValue) {
      result += plusValue;
      return this;
    },
    minus: function (minusValue) {
      result -= minusValue;
      return this;
    },
    value: function () {
      return result;
    },
  };
}

function plus(plusValue) {
  return calculator(plusValue);
}

function minus(minusValue) {
  return calculator(minusValue);
}

const res = plus(10).minus(5).plus(3).minus(2).value();

