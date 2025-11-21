import { Router } from 'express'

const endpoints = Router();

endpoints.get('/teste', async (req, res) => {
    res.send("INICIO DOS TESTES")
})



export default endpoints