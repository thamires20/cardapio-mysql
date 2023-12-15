import { buscarTodas, buscarUma, inserir, alterar, deletar, buscarNome, atualizarEspecifico } from "../Services/bebidasService.js";

async function buscarTodasBebidas(req, res) {
    let json = { error: '', result: [] }

    let cardapio = await buscarTodas()

    for (let i in cardapio) {
        json.result.push({
            id: cardapio[i].id,
            bebidas: cardapio[i].bebidas,
            preço: cardapio[i].preço

        })
    }
    res.json(json)
}

async function buscarUmaBebida(req, res) {
    const id = req.params.id
    const cardapio = await buscarUma(id)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Bebida não encontrada" })
    }
    return res.json(cardapio[0])
}

async function inserirBebida(req, res) {
    let json = { error: '', result: {} }

    let bebidas = req.body.bebidas
    let preço = req.body.preço
    let quantidade = req.body.quantidade

    if (bebidas && preço && quantidade) {
        let bebidasId = await inserir(bebidas, preço, quantidade)
        json.result = {
            id: bebidasId,
            preço,
            quantidade
        }
    } else {
        json.error = 'Campos não enviados'
    }

    res.json(json);
}

async function alterarBebida(req, res) {
    let json = { error: '', result: {} }

    let idBebida = req.params.id
    let bebidas = req.body.bebidas
    let preço = req.body.preço
    let quantidade = req.body.quantidade

    if (idBebida && bebidas && preço && quantidade) {
        await alterar(idBebida, bebidas, preço, quantidade)
        json.result = {
            idBebida,
            bebidas,
            preço,
            quantidade
        }
    } else {
        json.error = 'Campos não enviados'

    }
    res.json(json)
}

async function deletarBebida(req, res) {
    let json = 'item deletado com sucesso'

    await deletar(req.params.id)

    res.json(json);
}

async function buscarBebidaPorNome(req, res) {
    let bebidas = req.params.bebidas
    const cardapio = await buscarNome(bebidas)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Bebida não encontrado" })
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

export { buscarTodasBebidas, buscarUmaBebida, inserirBebida, alterarBebida, deletarBebida, buscarBebidaPorNome, atualizaCampoEspecifico }