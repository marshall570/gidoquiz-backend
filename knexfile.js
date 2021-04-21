require('dotenv/config')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?sslmode=require',
    searchPath: ['knex', 'public'],
    pool: {
      min: 2,
      max: 5
    },
    migrations: {
      directory: __dirname + '/src/database/migrations/',
    },
    ssl: {
      rejectUnauthorized: false
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?sslmode=require',
    searchPath: ['knex', 'public'],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations/',
    },
    ssl: {
      rejectUnauthorized: false,
    }
  },
}
