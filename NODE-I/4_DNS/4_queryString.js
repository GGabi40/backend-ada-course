const queryString = require('querystring');
const url = require('url');

const baseurl = 'https://sitedeviajes.com.br';

const uri = queryString.stringify({
    destino: 'Espirito Santo',
    periodo: 'Verano'
})


const fullURL = `${baseurl}/${uri}`;

console.log(fullURL);

const parsedUri = queryString.parse(uri);
console.log(parsedUri);

console.log(url.parse(fullURL)); // Me dice toda la información de la URL



// -- Formatación Unicode (Es mejor utilizar sin formatación)
const uri2 = queryString.escape('Sáo Paulo');
console.log(uri2);

const unescapedUri2 = queryString.unescape(uri2);
console.log(unescapedUri2);
