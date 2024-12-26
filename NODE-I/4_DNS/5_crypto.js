const crypto = require('crypto');

const llave = crypto.randomBytes(12).toString('base64');
console.log(llave);

const uuid = crypto.randomUUID();
console.log(uuid);


const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 })

console.log(privateKey);
console.log(publicKey);
