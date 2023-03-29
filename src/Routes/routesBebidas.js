import { Router } from "express";
import { buscarTodasBebidas, buscarUmaBebida, inserirBebida } from "../Controllers/bebidasController.js";
const Roouter = Router();

Roouter.get('/bebidas', buscarTodasBebidas)
Roouter.get('/bebida/:id', buscarUmaBebida)
Roouter.post('/bebida', inserirBebida)



export { Roouter }