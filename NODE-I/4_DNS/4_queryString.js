const queryString = require('querystring');

const baseurl = 'https://sitedeviajes.com.br';

const uri = queryString.stringify({
    destino: 'Espirito Santo',
    periodo: 'Verano'
})

const url = `${baseurl}/${uri}`;

console.log(url);

const parsedUri = queryString.parse(uri);
console.log(parsedUri);

// -- Formatación Unicode (Es mejor utilizar sin formatación)
const uri2 = queryString.escape('Sáo Paulo');
console.log(uri2);

const unescapedUri2 = queryString.unescape(uri2);
console.log(unescapedUri2);
