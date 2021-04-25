const Pergunta = require('../models/Perguntas')

module.exports = {
    async insert(request, response) {
        const { pergunta, alt_a, alt_b, alt_c, alt_d, resposta, equipe } = request.body

        const last_question = await Pergunta.countDocuments()
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
        const { qid } = request.query

        const question = await Pergunta.findOne({ numero: qid })

        return response.json(question)
    },

    async total(request, response) {
        const query_result = await Pergunta.countDocuments()

        return response.json({ total_perguntas: query_result })
    },

    async nuke(request, response) {
        await Pergunta.deleteMany()

        return response.status(204).send()
    },

    async select_all(request, response) {
        const { tn } = request.query

        const perguntas = await Pergunta.find({ equipe: tn })

        return response.json(perguntas)
    }
}
