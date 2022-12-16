const arr = [1, [2, [3], 4, [5, 6, [7, 8, [9, [10]]]]]];

const flatten = (arr) =>
  arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flatten(curr));
    } else {
      acc = [...acc, curr];
    }
    return acc;
  }, []);

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
