import crypto from 'crypto-js';


self.addEventListener('message', async ({data: {file, hash}}) => {
  const wordArray = crypto.lib.WordArray.create(file);
  const hashString = crypto[hash](wordArray).toString(crypto.enc.Hex);
  self.postMessage(hashString);
});
