/**
 * @param {Function} fn
 */
function memoize(fn) {
  const storedValues = {};
  return function (...args) {
    const jsonArgs = JSON.stringify(args);
    if (jsonArgs in storedValues) {
      return storedValues[jsonArgs];
    }
    const value = fn(...args);
    storedValues[jsonArgs] = value;
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
