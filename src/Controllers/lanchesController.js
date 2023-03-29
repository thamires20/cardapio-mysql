import { buscarTodos, buscarUm, inserir, alterar, deletar } from '../Services/lanchesService.js';

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
    let json = { error: '', result: {} }

    let id = req.params.id
    let cardapio = await buscarUm(id)

    if (cardapio) {
        json.result = cardapio
    }
    res.json(json)
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

export { buscarTodosLanches, buscarUmLanche, inserirLanche, alterarLanche, deletarLanche }