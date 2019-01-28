//Requireds
const fs = require('fs');
//const fs = require('express');
//const fs = require('./path_del_archivo');

let base = 7;
let data = '';

for (let i = 1; i <= 10; i++) {
    console.log(`${ base } * ${ i } =  ${ base * i }`);
    data += `${ base } * ${ i } =  ${ base * i }\n`;
}

//const data = new Uint8Array(Buffer.from('Hola Node.js'));
fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt a sido creado!`);
});