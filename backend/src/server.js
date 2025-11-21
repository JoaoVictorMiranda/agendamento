import express from 'express';
import dotenv from 'dotenv'
import configurarRotas from './routes/index.js';


dotenv.config();
const api = express();


configurarRotas(api)



const PORT = process.env.PORT;

api.listen(PORT, () => console.log(` SUBIU na PORTA: ${PORT}`))