// Se refiere a Input / Output.
// intercambia info con user

const rl = require('readline');

// creo el prompt, agarro respuestas:
const prompt = rl.createInterface({
    input: process.stdin, // agarra info de teclado
    output: process.stdout // devuelve por terminal
})

// Arranco el prompt con .question:
// .question recibe: (string, callback Function)
prompt.question('Cuál es tu numero favorito? ', (respuesta) => {
    console.log(`El doble de tu numero favorito es: ${parseInt(respuesta) * 2}`);
    prompt.close(); // cierra la consola
});
