    const MinorBank = await axios( Minor_Bank_PDF, {
        responseType: 'arraybuffer'
    })
    .then(response => {
        return Buffer.from(response.data, 'base64');
    });

    const MinorBankAPI = await axios({
        method: "post",
        url: 'https://api.sensible.so/v0/extract/bank_statements',
        data: MinorBank,
        headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
    }
    );

    const MajorBank = await axios( Major_Bank_PDF, {
        responseType: 'arraybuffer'
    })
    .then(response => {
        return Buffer.from(response.data, 'base64');
    });

    const MajorBankAPI = await axios({
        method: "post",
        url: 'https://api.sensible.so/v0/extract/bank_statements',
        data: MajorBank,
        headers: { "Content-Type": `application/pdf`, "Authorization": 'Bearer ' + API_KEY}
    }).then(response => {
        console.log(response.data);
    }
    ).catch(error => {
        console.log(error);
    }
    );
        
    console.log('This is our Minor Bank response: \n', 'Status Code:' , MinorBankAPI.status, '\n\n', MinorBankAPI.data);
    console.log('\n\n\n\n');
    console.log('This is our Major Bank response: \n', 'Status Code:' , MajorBankAPI.status, '\n\n', MajorBankAPI.data);
