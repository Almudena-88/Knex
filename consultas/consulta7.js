const db = require('../db')

db('libro')
    .where('id', 1)
    .del()
    .then(libros => console.log(libros))
    .catch(err => console.error(err));