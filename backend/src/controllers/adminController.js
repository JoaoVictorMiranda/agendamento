import { Router } from 'express'
import { generateToken, getAuthentication } from '../middlewares/jwt.js'
import * as repo from '../repository/adminRepository.js'

//Pega a role se for administrador deixa passar
import { onlyAdmin } from '../middlewares/roles.js'

const endpoints = Router();

//Somente um admin pode cadastrar outro admin  (Para evitar problemas futuros)
endpoints.post('/admin/cadastro', getAuthentication(onlyAdmin), async (req, res) => {
    const dados = req.body;

    const NewId = await repo.adminCadastro(dados);

    res.send({
        NewId: NewId
    })
});


endpoints.post('/admin/login', async (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    const dados = await repo.adminLogin(email, senha);
    const token = generateToken(dados);

    res.send({
        token: token
    })
})

export default endpoints;