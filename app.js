const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];
    /**
     * Handling when initialValue is not passed
     */
    accumulator = accumulator ? callback(accumulator, currentElement, i, this) : currentElement;
  }
  return accumulator;
};

const sum = arr.myReduce((acc, curr) => acc + curr);
console.log(sum); // 15
