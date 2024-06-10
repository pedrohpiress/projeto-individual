var database = require("../database/config")

function cadastrar(totalCorrect, totalErros, fkUsuario) {
    var instrucao = `
        INSERT INTO quiz (acertos, erros, fkUsuario) VALUES ('${totalCorrect}', '${totalErros}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};