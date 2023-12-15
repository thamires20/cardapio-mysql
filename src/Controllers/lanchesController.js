import { buscarTodos, buscarUm, inserir, alterar, deletar, buscarNome, atualizarEspecifico } from '../Services/lanchesService.js';

async function buscarTodosLanches(req, res) {
    let json = { error: '', result: [] }

    let cardapio = await buscarTodos()

    for (let i in cardapio) {
        json.result.push({
            id: cardapio[i].id,
            lanches: cardapio[i].lanches,
            preço: cardapio[i].preço,
            descriçao: cardapio[i].descriçao

        })
    }
    res.json(json)
}

async function buscarUmLanche(req, res) {

    let id = req.params.id
    const cardapio = await buscarUm(id)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Lanche não encontrado" })
    }
    return res.json(cardapio[0])
}


async function inserirLanche(req, res) {
    let json = { error: '', result: {} }

    let lanches = req.body.lanches
    let preço = req.body.preço
    let descriçao = req.body.descriçao


    if (lanches && preço && descriçao) {
        let lanchesid = await inserir(lanches, preço, descriçao);
        json.result = {
            id: lanchesid,
            preço,
            descriçao
        };
    } else {
        json.error = 'Campos não enviados'
    }

    res.json(json);
}

async function alterarLanche(req, res) {
    let json = { error: '', result: {} }

    let idLanche = req.params.id
    let lanches = req.body.lanches
    let preço = req.body.preço
    let descriçao = req.body.descriçao

    if (idLanche && lanches && preço && descriçao) {
        await alterar(idLanche, lanches, preço, descriçao)
        json.result = {
            idLanche,
            lanches,
            preço,
            descriçao
        }
    } else {
        json.error = 'Campos não enviados'
    }
    res.json(json)
}

async function deletarLanche(req, res) {
    let json = 'item deletado com sucesso'

    await deletar(req.params.id);

    res.json(json);

}

async function buscarLanchePorNome(req, res) {
    let lanches = req.params.lanches
    const cardapio = await buscarNome(lanches)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Lanche não encontrado" })
    }
    return res.json(cardapio[0])
}

async function atualizaCampoEspecifico(req, res) {
    let id = req.params.id
    let body = req.body

    if (id && body) {
        await atualizarEspecifico(body)
        json.result = {
            body
        }
    }
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
}






export { buscarTodosLanches, buscarUmLanche, inserirLanche, alterarLanche, deletarLanche, buscarLanchePorNome, atualizaCampoEspecifico }