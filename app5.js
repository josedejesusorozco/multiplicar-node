const argv = require('./config/yargs5').argv;
const colors = require('colors');
// const colors = require('colors/safe');

const { crearArchivo } = require('./Multiplicar/Multiplicar5');
const { listarArchivo } = require('./Multiplicar/Multiplicar5');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log('...'))
            .catch(e => console.log(e));
        break;
        // console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            // .then(archivo => console.log(`Archivo creado: `, colors.red(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];