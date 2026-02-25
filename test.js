const db = require('./db') 


// Para comprobar por terminal la base de datos con la que se está trabajando
// el host y el puerto
 
db.raw('SELECT current_database(), inet_server_addr(), inet_server_port()')
    .then(res => console.log(res.rows))
    .catch(err => console.error(err))
    .finally(() => db.destroy());