import AppDataSource from '../../db.js';

function buscarTodos() {
    return AppDataSource.query('SELECT * FROM lanches')
}

function buscarUm(id) {
    return AppDataSource.query('SELECT * FROM lanches WHERE id = ?', [id])
}

function buscarNome(lanches) {
    return AppDataSource.query('SELECT * FROM lanches WHERE lanches = ?', [lanches])
}

function inserir(lanches, preço, descriçao) {
    return AppDataSource.query('INSERT INTO lanches (lanches, preço, descriçao) VALUES (?, ?, ?)', [lanches, preço, descriçao])
}

function alterar(id, lanches, preço, descriçao) {
    return AppDataSource.query('UPDATE lanches SET lanches = ?, preço = ?, descriçao = ? WHERE id = ?', [lanches, preço, descriçao, id])
}

function atualizarEspecifico(id, lanches) {
    return AppDataSource.query('UPDATE lanches SET lanches = ? WHERE id = ?', [lanches, id])
}

function deletar(id) {
    return AppDataSource.query('DELETE FROM lanches WHERE id = ?', [id])
}

export { buscarTodos, buscarUm, inserir, alterar, deletar, buscarNome, atualizarEspecifico }