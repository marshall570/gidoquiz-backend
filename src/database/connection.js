require('dotenv/config')

const knex = require('knex')
const configs = require('../../knexfile')

const connection = knex(configs[process.env.APP_ENV])

connection.migrate.latest([configs])

module.exports = connection
