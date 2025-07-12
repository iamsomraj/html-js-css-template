const promise1 = new Promise((resolve) => setTimeout(() => resolve('Hello'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('World'), 500));

function myPrmoiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    promises.forEach((promiseItem, index) => {
      promiseItem
        .then((value) => {
          result[index] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

const resultAll = myPrmoiseAll([promise1, promise2]);
resultAll
  .then((values) => {
    console.log('Promise.all');
    console.log(values);
  })
  .catch((reason) => {
    console.log('Promise.all');
    console.log(reason);
  });

function myPromiseAllSettled(promises) {
  const result = [];
  let count = 0;
  return new Promise((resolve) => {
    promises.forEach((promiseItem, index) => {
      count++;
      promiseItem
        .then((value) => (result[index] = { status: 'fulfilled', value }))
        .catch((reason) => (result[index] = { status: 'rejected', reason }))
        .finally(() => {
          if (count === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

const resultAllSettled = myPromiseAllSettled([promise1, promise2]);

resultAllSettled.then((values) => {
  console.log('Promise.allSettled');
  console.log(values);
});

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promiseItem) => {
      promiseItem.then(resolve).catch(reject);
    });
  });
}

const resultRace = myPromiseRace([promise1, promise2]);
resultRace
  .then((value) => {
    console.log('Promise.race');
    console.log(value);
  })
  .catch((reason) => {
    console.log('Promise.race');
    console.log(reason);
  });
