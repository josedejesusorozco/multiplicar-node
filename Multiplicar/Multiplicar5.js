const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base, '${ base }' no es un número `);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido para el límite, '${ limite }' no es un número `);
            return;
        }

        console.log('==========================='.green);
        console.log(`=====  Tabla de ${ base}  =====`.green);
        console.log('==========================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } =  ${ base * i }`);
        }

        resolve('Fin...');

    });

}

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base, '${ base }' no es un número `);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido para el límite, '${ limite }' no es un número `);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } =  ${ base * i }`);
            data += `${ base } * ${ i } =  ${ base * i }\n`;
        }

        /*const data = new Uint8Array(Buffer.from('Hola Node.js'));*/
        // fs.writeFile(`Tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
            // resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}