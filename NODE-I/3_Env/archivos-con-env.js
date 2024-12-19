/*
Utilizar dotenv es muy importante para la seguridad de los datos
*/

const path = require('path');

// IMPORTAR DOTENV:
const dotenv = require('dotenv');
// Si .env está en la raíz de tu carpeta: pasar dotenv.config() sin argumentos
// si está en alguna otra carpeta, pasarle path:
dotenv.config({ path: path.join(__dirname, '.env') });

console.log(process.env.NODE_ENV);

const filePath = path.join(process.cwd(), 'NODE-I', '1_MODULO_IO', 'texto.txt');

console.log(filePath);


const fs = require('fs');

fs.readFile(filePath, {}, (error, datos) => {
    if (error) {
        console.error('Error en la lectura del archivo, ', filePath);
        return;
    }
    
    console.log('\n TEXTO MODIFICADO:');
    
    const texto = datos.toString();
    const lineas = texto.split('\n');

    lineas.forEach((linea, index) => {
        console.log(`${index +1} - ${linea}`)
    })

    console.log(`\n Archivo guardado en el bucket ${process.env.S3_BUCKET}`);
})