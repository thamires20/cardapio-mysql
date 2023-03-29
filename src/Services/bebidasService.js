import AppDataSource from "../../db.js";

function buscarTodas() {
    return AppDataSource.query('SELECT * FROM bebidas')
}

function buscarUma(id) {
    return AppDataSource.query('SELECT * FROM bebidas WHERE id = ?', [id])
}

function inserir(bebidas, preço) {
    return AppDataSource.query('INSERT INTO bebidas (bebidas, preço) VALUES (?, ?)', [bebidas, preço])
}

export { buscarTodas, buscarUma, inserir };