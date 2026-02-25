// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// Se pueden tener configuradas varias bases de datos: una para development
// otra para testing y otra para producción

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '172.17.0.3',
      database: 'libros',
      user: 'postgres',
      password: '1234'
    },
    pool: { // Gestiona las conexiones simultáneas (min/max)
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations', // Nombre de la tabla q rastrea q migraciones ya se han ejecutado
      directory: './migrations'  // Para definir la ubicación de archivos de migrations
    },
    seeds: {
      directory: './seeds'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
