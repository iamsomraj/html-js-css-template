function add100(x) {
  return x + 100;
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function myCompose(...functions) {
  return function (x) {
    return functions.reduceRight((acc, curr) => curr(acc), x);
  };
}

function myPipe(...functions) {
  return function (x) {
    return functions.reduce((acc, curr) => curr(acc), x);
  };
}

const composedFunction = myCompose(add100, double, square);
console.log('🚀 ~ composedFunction ');
console.log(composedFunction(2)); // 108
const pipedFunction = myPipe(add100, double, square);
console.log('🚀 ~ pipedFunction ');
console.log(pipedFunction(2)); // 41616
