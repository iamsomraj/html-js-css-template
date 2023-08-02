/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let count = 0;
  return function (...args) {
    if (count === 1) {
      return undefined;
    }
    count++;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
const res = onceFn(1, 2, 3); // 6
console.log('🚀 res:', res);
const res2 = onceFn(2, 3, 6); // returns undefined without calling fn
console.log('🚀 res2:', res2);
