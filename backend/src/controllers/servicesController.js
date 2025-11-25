import * as repo from '../repository/servicesRepository.js'
import express from 'express';
import { getAuthentication } from '../middlewares/jwt.js'

const auth = getAuthentication();

import { onlyAdmin } from '../middlewares/roles.js'

const endpoints = express.Router()

endpoints.post('/admin/services', getAuthentication(onlyAdmin), async (req, res) => {
    const dados = req.body;

    if (!onlyAdmin) {
        res.status(404).send({
            ERROR: "Não autorizado a cadastrar serviço"
        })
    } else {
        const info = await repo.cadastrarServico(dados);

        res.status(201).send(
            info
        )
    }
})

endpoints.get('/services', auth, async (req, res) => {
    const services = await repo.listarServicos();

    res.send(services)
})


export default endpoints