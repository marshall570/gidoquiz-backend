require('dotenv/config')
const express = require('express')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(errors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)

module.exports = app
