const http = require('http');

const request = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(request, function(res) {

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