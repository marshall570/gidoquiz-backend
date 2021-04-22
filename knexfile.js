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

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations/',
    },
    extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  },
}
