const http = require('http');

const options = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        // 'Content-type': 'application/x-www-form-urlencoded'
        'Content-type': 'application/json'
    }
};

// const param = 'nome=José';
const param = JSON.stringify({
    nome: 'José'
});

let req = http.request(options, function(res) {

    let chunks = [];

    res.on('data', function(chunk) {
        chunks.push(chunk);
    });
    
    res.on('end', function() {
        const data = Buffer.concat(chunks).toString();
        console.log(data);
    });
    
    res.on('error', function(err) {
        console.error(err);
    });
});

req.write(param);
req.end();