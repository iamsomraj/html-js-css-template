self.addEventListener('message', (event) => {
  self.postMessage(event.data * 100);
});
