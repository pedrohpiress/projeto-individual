var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO quiz (acertos) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};