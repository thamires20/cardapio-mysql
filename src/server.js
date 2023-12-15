import * as dotenv from "dotenv"
dotenv.config()
import { lancheRouter } from './Routes/routesLanches.js';
import { bebidaRouter } from './Routes/routesBebidas.js';
import AppDataSource from '../db.js';
import express from 'express';
const server = express()
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerOptions = require("./docs/config/swaggerConfig.json");
const swaggerDocs = swaggerJsDoc(swaggerOptions)

AppDataSource.initialize().then((conn) => {
    console.log("Conectado com banco de dados!")
    server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, {
        explorer: true
    }))
    server.use(express.json())
    server.use(cors())
    server.use(helmet())
    server.use(morgan('tiny'))
    server.use(lancheRouter);
    server.use(bebidaRouter);
    server.listen(process.env.PORT, () => {
        console.log(`Server rodando na porta: ${process.env.PORT}`)
    })
})

