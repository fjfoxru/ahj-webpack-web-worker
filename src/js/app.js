import Worker from './web-worker';

const fileEl = document.querySelector('[data-id=file-input]');
const resultEl = document.querySelector('[data-id=result-text]');
const hashSelect = document.querySelector('[data-id=hash-format]');

fileEl.addEventListener('change', async (evt) => {
  hashWorker();
});
hashSelect.addEventListener('change', async (evt) => {
  hashWorker();
});

function hashWorker() {
  const file = fileEl.files[0];
  const hash = hashSelect.value;
  const worker = new Worker();
  worker.postMessage({file, hash});
  worker.addEventListener('message', ({data: result}) => {
    resultEl.textContent = result;
    worker.terminate();
  });
}