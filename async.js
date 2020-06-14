const https = require('https');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        // res is an object that emits events as we receive data from Google servers
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
        .end();
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()