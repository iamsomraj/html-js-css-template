const btnEl = document.getElementById('btn');

const throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) {
      console.log(`Time left:  ${(now - last) / 1000} sec`);
      return;
    }
    last = now;
    return fn(...args);
  };
};

btnEl.addEventListener(
  'click',
  throttle(() => {
    console.log('Clicked');
  }, 5000)
);
