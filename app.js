// What is function currying?
// Function currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.

// By Bind Method
const multiply = function (a, b) {
    return a * b;
}
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // 8

// By Closure
const multiplyClosure = function (a) {
    return function (b) {
        return a * b;
    }
}
const multiplyByTwoClosure = multiplyClosure(2);
console.log(multiplyByTwoClosure(4)); // 8