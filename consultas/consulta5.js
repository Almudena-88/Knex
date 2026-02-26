const db = require('../db');

db('libro')
    .where('id', 5)
    .update({ nombre: 'Rosa María' })
    .then(libro => console.log(libro))
    .catch(err => console.error(err));

