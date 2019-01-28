const { crearArchivo } = require('./Multiplicar/Multiplicar');

// console.log(multiplicar);

//let base = '5';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

// console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));

//console.log(module);
//console.log(process);
// console.log(process.argv); //Path donde está mi archivo