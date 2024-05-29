var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var totalCorrect = req.body.totalCorrectServer;

    if (totalCorrect == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    quizModel.cadastrar(totalCorrect).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}