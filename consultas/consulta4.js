const db = require('../db');

db('libro')
    .select('*')
    .where('id', 3)
    .then(libro => console.log(libro))
    .catch(err =>  console.error(err))
 