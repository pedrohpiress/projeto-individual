var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var totalCorrect = req.body.totalCorrectServer;
    var totalErros = req.body.totalErrosServer;
    var fkUsuario = req.body.fkUsuarioServer

    if (totalCorrect == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    quizModel.cadastrar(totalCorrect, totalErros, fkUsuario).then(function(resposta){
        res.status(200).send("Enviado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}