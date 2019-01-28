const fs = require('fs');

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un número `);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            console.log(`${ base } * ${ i } =  ${ base * i }`);
            data += `${ base } * ${ i } =  ${ base * i }\n`;
        }

        /*const data = new Uint8Array(Buffer.from('Hola Node.js'));*/
        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}