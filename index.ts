const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;
const API_KEY = process.env.API_KEY ? process.env.API_KEY?.toString(): '';

// const sdk = require('api')('@sensiblehq/v0#5u9923fl27vdvdd');

// sdk.auth(APIKey);
// sdk['list-configurations']()
//   .then(res => console.log('This is the SDK Response', res))
//   .catch(err => console.error(err));

const check = fetch("https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/1_extract_your_first_data.pdf", {
  method: "POST",
  headers: {
    Authorization: API_KEY,
    "Content-Type": "application/pdf"
  },
  body: "@1_extract_your_first_data.pdf"

}).then(res => console.log('This is the POST Request:', res));

const getCheck = fetch("https://api.sensible.so/v0/extract/title_commitment?environment=development", {
  headers: {
    Accept: "application/json",
    Authorization: API_KEY,
  }
}).then(res => console.log('This is the GET Request:', res));

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
  // sdk();
  check;
  getCheck;
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

