import { Router } from "express";
import { buscarTodosLanches, buscarUmLanche, inserirLanche, alterarLanche, deletarLanche, buscarLanchePorNome, atualizaCampoEspecifico } from '../Controllers/lanchesController.js'
const lancheRouter = Router();

lancheRouter.get('/lanches', buscarTodosLanches)
lancheRouter.get('/lanche/:id', buscarUmLanche)
lancheRouter.get('/lanches/:lanches', buscarLanchePorNome)
lancheRouter.post('/lanche', inserirLanche)
lancheRouter.put('/lanche/:id', alterarLanche)
lancheRouter.delete('/lanche/:id', deletarLanche)
lancheRouter.patch('/lanche/:id', atualizaCampoEspecifico)

export { lancheRouter }