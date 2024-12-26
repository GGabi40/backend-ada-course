/* 
QUE ES EL DNS
Son las siglas de "Domain Name System", o "Sistema de nombres de dominio". 
Es un sistema que traduce los nombres de dominio, como "www.google.com", 
en direcciones IP, como "74.125.19.147", que son las que utilizan los navegadores 
para cargar las páginas web.
*/

const dns = require('dns');
const urlBuscar = 'google.com';

// FORMA 1

/* const ipv4 = dns.resolve4(urlBuscar, (err, addresses) => {
    if(err) {
        console.log('URL no encontrada');
        return;
    }

    console.log(addresses);
}) */


// FORMA 2

async function bootstrap() {
    // Tiempo buscando por DNS padrón.

    console.time('Buscando DNS padrón.')
    const addresses = await dns.promises.resolve4(urlBuscar);
    console.log(addresses); // busca el dns de google
    
    const nameServer = await dns.promises.resolveNs(urlBuscar);
    console.log(nameServer); // verifica los servidores que se utilizan
    console.timeEnd('Buscando DNS padrón.')


    // Tiempo buscando por DNS específico
    const ipNs = await dns.promises.resolve4(nameServer[1])

    const resolver = new dns.Resolver(); // Hacer con que se utilice un servidor específico
    resolver.setServers(ipNs); // utilizar el servidor 1 de la
    // lista, si no existe (o no se puede), utilizar el padrón.

    console.time('Buscando DNS Específico.')
    const addressesEspecifico = resolver.resolve4(urlBuscar, (error, addresses) => {
        if(error) {
            console.error('No fue posible encontrar.');
        }
        console.log(addresses);
        console.timeEnd('Buscando DNS Específico.')
    });
}

bootstrap();

