var database = require("../database/config")

function exibirUsuarioFinal() {
    var instrucao = `
    select distinct
    quiz.acertos as TotalAcertos,
    usuario.nome as NomeUsuario
    from usuario
    inner join quiz on usuario.id = quiz.fkUsuario
    order by TotalAcertos desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirMedia() {
    var instrucao = `
    select round(avg(acertos), 0) as mediaAcertos from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarErrosAcertos() {
    var instrucao = `select distinct
    quiz.acertos as TotalAcertos,
    usuario.nome as NomeUsuario
    from usuario
    inner join quiz on usuario.id = quiz.fkUsuario
    order by TotalAcertos desc limit 3;`

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}


module.exports = {
    mostrarErrosAcertos,
    exibirMedia,
    exibirUsuarioFinal
}