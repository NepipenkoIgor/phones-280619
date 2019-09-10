// import http from 'http'
const http = require('http');
const nodeStatic = require('node-static');

const file = new nodeStatic.Server(`${__dirname}/`, {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

http.createServer((request, response) => {
    file.serve(request, response);
}).listen(3000);
