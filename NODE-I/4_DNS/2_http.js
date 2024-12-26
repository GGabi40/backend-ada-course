const http = require('http');

const sports = ['basket', 'voley', 'tenis', 'futbol'];

const server = http.createServer( async (req, res) => {
    const { method, statusCode, url } = req;


    // Funcionará para agregar un nuevo deporte a la lista
    const bodyPromise = new Promise((resolve, reject) => {
        let body;
        req.on('data', data => {
            body = JSON.parse(data);
        })
        req.on('end', data => {
            resolve(body);
        })
    })


    if (url === '/') {
        res.write('<h1>HTTP Server - con nodemon</h1> <p>Servidor HTML</p>');
        res.end();
        return;
    }

    if (url === '/api/sports') {
        // Aplicando funciones metodos para utilizar con FETCH
        if (method === 'GET') {
            res.write(JSON.stringify(sports));
            res.end();
            return;
        }

        // Si quiero agregar un nuevo deporte a la lista: 
        if (method === 'POST') {
            const body = await bodyPromise;
            // console.log(body);
            const { name } = body; // agarro prop "name"

            // verifica si existe el deporte dentro de la lista
            if (!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())) {
                sports.push(name.toLowerCase());
            }

            res.write(name.toLowerCase());
            res.end();
            return;
        }
    }

    res.statusCode = 404;
    res.write('<h1>Error 404.</h1> <h2>Página no Encontrada.</h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo en el http://localhost:3000');
})