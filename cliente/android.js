const http = require('http');

const options = {
    hostname: 'localhost',
    port: 80,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept': 'application/json',
        // 'Content-type': 'application/x-www-form-urlencoded'
        'Content-type': 'application/json'
    }
};

let req = http.request(options, function(res) {

    let chunks = [];

    res.on('data', function(chunk) {
        chunks.push(chunk);
    });
    
    res.on('end', function() {
        const data = Buffer.concat(chunks).toString();
        console.log(res.statusCode, data);
    });
    
    res.on('error', function(err) {
        console.error(err);
    });
});

req.end();