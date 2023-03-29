import * as dotenv from "dotenv"
dotenv.config()
import { router } from './Routes/routesLanches.js';
import { Roouter } from './Routes/routesBebidas.js';
import AppDataSource from '../db.js';
import express from 'express';
const server = express()

AppDataSource.initialize().then((conn) => {
    console.log("Conectado com banco de dados!")

    server.use(express.json())
    server.use(router);
    server.use(Roouter)

    server.listen(process.env.PORT, () => {
        console.log(`Server rodando na porta: ${process.env.PORT}`)
    })
})

