const db = require('./db');

db.withSchema('public') // asegura que busque la tabla específicamente en el esquema public
    .select('*')
    .from('libro')
    .then(libros => console.log(libros)) // Then: función que se ejecuta cuando la consulta a la BD se completa con exito
    .catch(err => console.error(err)); // Captura errores en caso de que no se cumpla la promesa