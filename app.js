// What is generators in JS?
// Generators are functions that can be exited and later re-entered. 
// Their context (variable bindings) will be saved across re-entrances.

const number = function* () {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}
const sequence = number();



console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());