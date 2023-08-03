/**
 * @param {Function} fn
 */
function memoize(fn) {
  let storedValues = {};
  return function (...args) {
    const jsonArgs = JSON.stringify(args);
    if (storedValues[jsonArgs]) {
      return storedValues[jsonArgs];
    }
    const value = fn(...args);
    storedValues = {
      ...storedValues,
      [jsonArgs]: value,
    };
    return value;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
console.log(callCount); // 1
memoizedFn(2, 3); // 5
console.log(callCount); // 1
memoizedFn(2, 3); // 5
console.log(callCount); // 1
