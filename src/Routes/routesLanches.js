import { Router } from "express";
import { buscarTodosLanches, buscarUmLanche, inserirLanche, alterarLanche, deletarLanche } from '../Controllers/lanchesController.js'
const router = Router();

router.get('/lanches', buscarTodosLanches)
router.get('/lanche/:id', buscarUmLanche)
router.post('/lanche', inserirLanche)
router.put('/lanche/:id', alterarLanche)
router.delete('/lanche/:id', deletarLanche)


export { router }