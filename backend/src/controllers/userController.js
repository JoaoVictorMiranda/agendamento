import { Router } from 'express'
import { generateToken } from '../middlewares/jwt.js'
import * as repo from '../repository/userRepository.js'

const endpoints = Router();


endpoints.post('/user/cadastro', async (req, res) => {
    try {
        const usuario = req.body;

        const id = await repo.cadastrarUsuario(usuario);

        const novoUsuario = {
            id,
            email: usuario.email,
            role: 'user'
        };

        const token = generateToken(novoUsuario);

        res.status(201).send({ token });

    } catch (error) {
        res.status(500).send(error);
    }
});


export default endpoints