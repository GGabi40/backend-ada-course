const path = require('path');
// para especificar que querés utilizar el
// path de node, se puede utilizar: const path = require('node:path');


// verifico el proceso que está ejecutando: process.cwd()
// entro a la carpeta 'NODE-I'
// busco el archivo "texto.txt"
const filePath = path.join(process.cwd(), 'NODE-I', '1_MODULO_IO', 'texto.txt');

// para guardar un archivo, hacer otra variable:
const fileOutPath = path.join(process.cwd(), 'NODE-I', '1_MODULO_IO', 'texto-con-lineas.txt');

console.log(filePath);


// para leer archivo:
const fs = require('fs');

fs.readFile(filePath, {}, (error, datos) => {
    if (error) {
        console.error('Error en la lectura del archivo, ', filePath);
        return;
    }
     
    console.log(datos.toString()); // lo lleva a string
    // si no se utiliza, aparece como hexadecimal


    // PARA MODIFICAR EL TEXTO:
    console.log('\n TEXTO MODIFICADO:');
    
    const texto = datos.toString();
    const lineas = texto.split('\n');

    lineas.forEach((linea, index) => {
        console.log(`${index +1} - ${linea}`)
    })

    // GUARDAR MODIFICACION EN UN ARCHIVO:
    const lineasAjustadas = lineas.map((linea, index) => {
        return `${index +1} - ${linea}`
    })

    fs.writeFile(fileOutPath, lineasAjustadas.join('\n'), {}, (error) => {
        if (error) {
            console.error('Error en la escritura del archivo, ', fileOutPath);
            return;
        }
    });
})