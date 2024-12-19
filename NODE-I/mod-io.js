// Se refiere a Input / Output.
// intercambia info con user

const rl = require('readline');

// creo el prompt, agarro respuestas:
const prompt = rl.createInterface({
    input: process.stdin, // agarra info de teclado
    output: process.stdout // devuelve por terminal
})

const promptPromise = {
    // se dice que recibe un parámetro (pregunta), 
    // haciendo con que se repase la pregunta como parámetro
    question: (pregunta) => new Promise((resolve, reject) => {
        try {
            prompt.question(pregunta, (respuesta) =>  resolve(respuesta))
        } catch(e) {
            reject(e);
        }
    }),
    close: () => prompt.close()
}

// Arranco el prompt con .question:
// prompt.question recibe: (string, callback Function)


// Funciona, pero si tengo muchas preguntas, me queda
// como un árbol:
// Para evitarlo, se puede hacer el promptPromise

/* 
SIN promptPromise

prompt.question('Cuál es tu numero favorito? ', (respuesta) => {
    console.log(`El doble de tu numero favorito es: ${parseInt(respuesta) * 2}`);

    prompt.question('Cuál es tu color favorito? ', (respuesta) => {
        console.log(`Tu color favorito es: ${respuesta}`);
    
        prompt.close(); // cierra la consola
    });
});
 */


/*  CON promptPromise: */

    // con async | await:
async function askUser() {
    const numero = await promptPromise.question('Cuál es tu numero favorito? ');
    console.log(`El doble de tu numero favorito es: ${parseInt(numero) * 2}`);

    // agregando otra pregunta:
    const color = await promptPromise.question('Cuál es tu color favorito? ');
    console.log(`Tu color favorito es: ${color}`);

    promptPromise.close();
}

askUser();

/* promptPromise.question('Cuál es tu numero favorito? ', (respuesta) => {
    console.log(`El doble de tu numero favorito es: ${parseInt(respuesta) * 2}`);

    prompt.question('Cuál es tu color favorito? ', (respuesta) => {
        console.log(`Tu color favorito es: ${respuesta}`);
    
        prompt.close(); // cierra la consola
    });
}); */