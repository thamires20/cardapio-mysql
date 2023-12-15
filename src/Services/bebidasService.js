import AppDataSource from "../../db.js";

function buscarTodas() {
    return AppDataSource.query('SELECT * FROM bebidas')
}

function buscarUma(id) {
    return AppDataSource.query('SELECT * FROM bebidas WHERE id = ?', [id])
}

function buscarNome(bebidas) {
    return AppDataSource.query('SELECT * FROM bebidas WHERE bebidas = ?', [bebidas])
}

function inserir(bebidas, preço, quantidade) {
    return AppDataSource.query('INSERT INTO bebidas (bebidas, preço, quantidade) VALUES (?, ?, ?)', [bebidas, preço, quantidade])
}

function alterar(id, bebidas, preço, quantidade) {
    return AppDataSource.query('UPDATE bebidas SET bebidas = ?, preço = ?, quantidade = ? WHERE id = ?', [bebidas, preço, quantidade, id])
}

function deletar(id) {
    return AppDataSource.query('DELETE FROM bebidas WHERE id = ?', [id])
}

function atualizarEspecifico(id, bebidas) {
    return AppDataSource.query('UPDATE bebidas SET bebidas = ? WHERE id = ?', [bebidas, id])
}

export { buscarTodas, buscarUma, inserir, alterar, deletar, buscarNome, atualizarEspecifico };