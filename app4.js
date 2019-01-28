const argv = require('./config/yargs4').argv;

const { crearArchivo } = require('./Multiplicar/Multiplicar3');
const { listarArchivo } = require('./Multiplicar/Multiplicar3');

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
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];