const webWorker = new Worker('worker.js');

webWorker.postMessage('1');

webWorker.addEventListener('message', (event) => {
  console.log(event.data);
});
