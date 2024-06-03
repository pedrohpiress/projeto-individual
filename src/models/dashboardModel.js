var database = require("../database/config")

function mostrarErrosAcertos() {
    var instrucao = `SELECT 
    u.nome AS NomeUsuario,
    q.acertos AS TotalAcertos
    FROM 
    usuario u
    JOIN 
    quiz q ON u.id = q.fkUsuario
    GROUP BY 
    u.id, u.nome
    ORDER BY 
    TotalAcertos DESC
    LIMIT 3;`

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    mostrarErrosAcertos
}