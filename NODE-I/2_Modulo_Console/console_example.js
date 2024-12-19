
/* El console tiene muchas propiedades:
console.error: tiene formatación roja
console.table:  muestra en tabla

console.time('string')
CÓDIGO
console.timeEnd('string') -> Muestra cuanto tiempo duró la ejecución del "CÓDIGO"
*/

const path = require('path');

const filePath = path.join(process.cwd(), 'NODE-I', '1_MODULO_IO', 'texto.txt');

console.log(filePath);


const fs = require('fs');

fs.readFile(filePath, {}, (error, datos) => {
    if (error) {
        // PARA ERROR:
        console.error('Error en la lectura del archivo, ', filePath);
        return;
    }

    // CONSOLE.TIME
    console.time('Verificando tiempo: ');
    
    console.log('\n TEXTO MODIFICADO:');
    
    const texto = datos.toString();
    const lineas = texto.split('\n');

    lineas.forEach((linea, index) => {
        console.log(`${index +1} - ${linea}`)
    })

    console.timeEnd('Verificando tiempo: ');
})