const http = require('http');
global.fetch = require('node-fetch');

const app = require('./app');

const { port } = require('./config');

const server = http.createServer(app);

server.listen(port, () => {});
