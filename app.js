const person = {
  firstName: 'Somraj',
  lastName: 'Mukherjee',
};

const print = function () {
  return this.firstName + ' ' + this.lastName;
};

/**
 * @description call immediately invokes the function with the new context and arguemnts
 * @param {*} context
 * @param  {...any} args
 */
Function.prototype.myCall = function (context, ...args) {
  context._this = this;
  return context._this(...args);
};

console.log(print.myCall(person));

/**
 * @description bind returns a new function which can be invoked later and that function has new context and arguements
 * @param {*} context
 * @param {*} arg
 */
Function.prototype.myBind = function (context, arg) {
  context._this = this;
  return function () {
    return context._this(arg);
  };
};

const newPrint = print.myBind(person);
console.log(newPrint());


Function.prototype.myApply = function (context, arg) {
    context._this = this;
    return context._this(arg);
}

console.log(print.myApply(person));
