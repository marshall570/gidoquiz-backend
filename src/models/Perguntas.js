const mongoose = require('mongoose')

const PerguntaSchema = new mongoose.Schema({
    numero: Number,
    pergunta: String,
    alt_a: String,
    alt_b: String,
    alt_c: String,
    alt_d: String,
    resposta: String,
    equipe: String
})

module.exports = mongoose.model('perguntas', PerguntaSchema)
