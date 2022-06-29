const axios = require("axios");

const PDF_URL = 'https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/1_extract_your_first_data.pdf';
const API_KEY = '20bae306043d2978ff0d9762bc828221750774fc6f684e3d5b66c413f267d9ae088e5990cbf364d81e5b22486dcb9d0d9365aa95580247b9f8e5d9adf0ec8fed';

const main = async () => {
  const document = await axios(PDF_URL, {
    responseType: 'arraybuffer'
  })
    .then(response => {
      return Buffer.from(response.data, 'base64');
    });

  const response = await axios({
    method: "post",
    url: 'https://api.sensible.so/v0/extract/senseml_basics',
    data: document,
    headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
  });

  console.log('This is our response: \n', 'Status Code:' , response.status, '\n\n', response.data);
}

main();