const db = require ('../db')

db ('libro')
.insert({ id: 6, nombre: 'La rosa', autor: 'Luis'})
.then (libro => console.log (libro))
.catch (err => console.error(err));

