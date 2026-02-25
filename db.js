const knex = require('knex'); // Se importa la biblioteca knex
const knexfile = require('./knexfile'); // Para importar el fichero de configuración knexfile


// Se escoge el entorno de configuración
const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];

// Se inicializa knex con la configuración
const db = knex(config);

// Se usa para exportar este fichero (db) y hacerlo accesible para ser importado a otros scrips
// y tener disponible la conexión
module.exports = db;

