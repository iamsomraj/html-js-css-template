const arr = [1, [2, [3], 4, [5, 6, [7, 8, [9, [10]]]]]];

const flatten = (arr, depth = Infinity) => {
  if (depth === 0) {
    return arr;
  }
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr, depth - 1));
    } else {
      return [...acc, curr];
    }
    return acc;
  }, []);
};

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
