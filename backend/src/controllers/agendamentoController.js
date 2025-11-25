import * as repo from '../repository/agendamentoRepository.js';
import express from 'express';
import { getAuthentication } from '../middlewares/jwt.js'

const auth = getAuthentication();

const endpoints = express.Router()




//Pega os dados necessarios para enviar para a inserção
endpoints.post('/services/:idService', auth, async (req, res) => {
    const idService = req.params.idService;
    const idUser = req.user.id_user;
    const dados = req.body;

    const info = await repo.fazerAgendamento(dados, idUser, idService);
    res.status(201).send(info)
})


export default endpoints;