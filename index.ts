const express = require('express');
const dotenv = require('dotenv');
const request = require("request-promise-native");

dotenv.config();

const app = express();
const port = process.env.PORT;
const API_KEY = process.env.API_KEY ? process.env.API_KEY?.toString(): '';

const main = async() => {
  // const exampleOptions = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: 'Bearer 20bae306043d2978ff0d9762bc828221750774fc6f684e3d5b66c413f267d9ae088e5990cbf364d81e5b22486dcb9d0d9365aa95580247b9f8e5d9adf0ec8fed',
  //   },
  // };
  
  // const example = await fetch('https://api.sensible.so/v0/document_types/type-id/configurations', exampleOptions)
  //   .then(response => response.json())
  //   .catch(err => console.error(err));
  //   console.log(example);
  const postOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 20bae306043d2978ff0d9762bc828221750774fc6f684e3d5b66c413f267d9ae088e5990cbf364d81e5b22486dcb9d0d9365aa95580247b9f8e5d9adf0ec8fed',
    },
    body: "@1_extract_your_first_data.pdf"
  };
  
  const post = await fetch("https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/1_extract_your_first_data.pdf", postOptions)
  .then(response => response.body)
  // .catch(err => console.error(err));
  console.log('This is the post response', post);

  // const getOptions = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: 'Bearer 20bae306043d2978ff0d9762bc828221750774fc6f684e3d5b66c413f267d9ae088e5990cbf364d81e5b22486dcb9d0d9365aa95580247b9f8e5d9adf0ec8fed',
  //   }
  // };
  
  // const get = await fetch("https://api.sensible.so/v0/extract/title_commitment?environment=development", getOptions)
  // .then(response => response.json())
  // .catch(err => console.error(err));;
  
  // app.get('/', (req, res) => {
  //   res.send('Express + TypeScript Server');
  //   post;
  //   get;
  //   example;
  // });
  
  // app.listen(port, () => {
  //   console.log(`[server]: Server is running at https://localhost:${port}`);
  // });
  
}
main();