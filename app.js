function get(obj, path) {
  const keys = path.split('.').map((key) => {
    if (key.includes('[')) {
      let [keyName, index] = key.split('[');
      return { keyName, index: parseInt(index) };
    }
    return key;
  });

  let current = obj;
  for (const key of keys) {
    if (typeof key === 'object') {
      current = current[key.keyName][key.index];
    } else {
      current = current[key];
    }

    if (current === undefined) {
      return undefined;
    }
  }

  return current;
}

const result = {
  a: {
    b: {
      c: [1, 2, 3, 4],
    },
  },
};

const path = 'a.b.c[3]';
const p = get(result, path);
console.log(p); // Output: 4
