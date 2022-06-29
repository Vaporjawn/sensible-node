const axios = require("axios");

const TC_PDF = 'https://github.com/Vaporjawn/sensible-node/raw/main/58265-title_commitment-3.pdf';
const Purchase_Contract_PDF = 'https://github.com/Vaporjawn/sensible-node/raw/main/58265_purchase_contract.pdf';
const Sample_Reports_PDF = 'https://github.com/Vaporjawn/sensible-node/raw/main/auto_insurance_anyco.pdf';
const State_Docs_PDF = '';
const API_KEY = '20bae306043d2978ff0d9762bc828221750774fc6f684e3d5b66c413f267d9ae088e5990cbf364d81e5b22486dcb9d0d9365aa95580247b9f8e5d9adf0ec8fed';

const main = async () => {
  const TCDocument = await axios(TC_PDF, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    return Buffer.from(response.data, 'base64');
  });

  const TCResponse = await axios({
    method: "post",
    url: 'https://api.sensible.so/v0/extract/title_commitment?environment=development',
    data: TCDocument,
    headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
  });

  const purchaseContractDocument = await axios(Purchase_Contract_PDF, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    return Buffer.from(response.data, 'base64');
  });

  const purchaseContract = await axios({
    method: "post",
    url: 'https://api.sensible.so/v0/extract/purchase_contract?environment=development',
    data: purchaseContractDocument,
    headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
  });

  const sampleReportsDocument = await axios(Sample_Reports_PDF, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    return Buffer.from(response.data, 'base64');
  });

  const sampleReports = await axios({
    method: "post",
    url: 'https://api.sensible.so/v0/extract/sample_reports?environment=development',
    data: sampleReportsDocument,
    headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
  });

  const stateDocsDocument = await axios(State_Docs_PDF, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    return Buffer.from(response.data, 'base64');
  }
  );

  const stateDocs = await axios({
    method: "post",
    url: 'https://api.sensible.so/v0/extract/state_docs_custody_certificate?environment=development',
    data: stateDocsDocument,
    headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
  });

  console.log('This is our title commitment response: \n', 'Status Code:' , TCResponse.status, '\n\n', TCResponse.data);
  console.log('\n\n\n\n');
  console.log('This is our purchase contract response: \n', 'Status Code:' , purchaseContract.status, '\n\n', purchaseContract.data);
  console.log('\n\n\n\n');
  console.log('This is our sample reports response: \n', 'Status Code:' , sampleReports.status, '\n\n', sampleReports.data);
  console.log('\n\n\n\n');
  console.log('This is our state docs response: \n', 'Status Code:' , stateDocs.status, '\n\n', stateDocs.data);
}

main();