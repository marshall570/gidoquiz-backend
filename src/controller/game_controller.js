const Pergunta = require('../models/Perguntas')

module.exports = {
    async insert(request, response) {
        const { pergunta, alt_a, alt_b, alt_c, alt_d, resposta, equipe } = request.body

        const last_question = await Pergunta.countDocuments({ equipe: equipe })
        console.log(last_question)
        const numero = last_question + 1

        await Pergunta.create({
            numero,
            pergunta,
            alt_a,
            alt_b,
            alt_c,
            alt_d,
            resposta,
            equipe
        })

        return response.status(201).send()
    },

    async select(request, response) {
        const { qid, tn } = request.query

        const question = await Pergunta.findOne({ numero: qid, equipe: tn })

        return response.json(question)
    },

    async total(request, response) {
        const { tn } = request.query
        const query_result = await Pergunta.countDocuments({ equipe: tn })

        return response.json({ total_perguntas: query_result })
    },

    async select_all(request, response) {
        const { tn } = request.query

        const perguntas = await Pergunta.find({ equipe: tn })

        return response.json(perguntas)
    }
}
