const btnEl = document.getElementById('btn');

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

btnEl.addEventListener(
  'click',
  debounce(() => {
    console.log('Clicked');
  }, 5000)
);
