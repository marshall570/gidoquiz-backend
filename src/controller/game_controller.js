const connection = require('../database/connection')

module.exports = {
    async insert(request, response) {
        try {
            const { pergunta, alt_a, alt_b, alt_c, alt_d, resposta, equipe } = request.body

            await connection('perguntas').insert({
                pergunta,
                alt_a,
                alt_b,
                alt_c,
                alt_d,
                resposta,
                equipe
            })

            return response.status(201).send()
        } catch (error) {
            console.error(error)
        }
    },

    async select(request, response) {
        try {
            const { qid } = request.query

            const question = await connection('perguntas')
                .where('id', qid)
                .select('pergunta', 'alt_a', 'alt_b', 'alt_c', 'alt_d', 'resposta', 'equipe')

            return response.json(question)
        } catch (error) {
            console.error(error)
        }
    },

    async total(request, response) {
        try {
            const [{ total }] = await connection('perguntas').count('id', { as: 'total' })

            return response.json({ total_perguntas: total })
        } catch (error) {
            console.error(error)
        }
    },

    async nuke(request, response) {
        try {
            await connection('perguntas').truncate()
    
            return response.status(204).send()
        } catch (error) {
            console.error(error)
        }
    },

    async select_all(request, response) {
        try {
            const question = await connection('perguntas').select('*')
            
            return response.json(question)
        } catch (error) {
            console.error(error)
        }
    }
}
