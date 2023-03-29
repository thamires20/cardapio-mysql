import { buscarTodas, buscarUma, inserir } from "../Services/bebidasService.js";

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
    let json = { error: '', result: {} }


    let id = req.params.id
    let cardapio = await buscarUma(id)

    if (cardapio) {
        json.result = cardapio
    }
    res.json(json)
}

async function inserirBebida(req, res) {
    let json = { error: '', result: {} }

    let bebidas = req.body.bebidas
    let preço = req.body.preço

    if (bebidas && preço) {
        let bebidasId = await inserir(bebidas, preço)
        json.result = {
            id: bebidasId,
            preço
        }
    } else {
        json.error = 'Campos não enviados'
    }

    res.json(json);
}

export { buscarTodasBebidas, buscarUmaBebida, inserirBebida }