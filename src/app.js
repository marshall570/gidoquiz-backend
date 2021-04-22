require('dotenv/config')
const express = require('express')
const { errors } = require('celebrate')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require('./routes')


mongoose.connect(
    process.env.MONGO_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

const app = express()

app.use(cors())
app.use(errors())
app.use(express.json())
app.use(routes)
app.use(morgan('dev'))

app.listen(process.env.PORT || 3000)

module.exports = app
