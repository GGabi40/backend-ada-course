const http = require('http');

const server = http.createServer((req, res) => {
    const { method, statusCode, url } = req;
    const sports = ['basket', 'voley', 'tenis', 'futbol'];

    if (url === '/') {
        res.write('<h1>HTTP Server - con nodemon</h1> <p>Servidor HTML</p>');
        res.end();
    }

    if (url === '/api/sports') {
        res.write(JSON.stringify(sports));
        res.end();
    }

    res.statusCode = 404;
    res.write('<h1>Error 404.</h1> <h2>Página no Encontrada.</h2>');
    res.end();

})

server.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo en el http://localhost:3000');
})