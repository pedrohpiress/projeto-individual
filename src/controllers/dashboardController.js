var dashboardModel = require("../models/dashboardModel");

function mostrarErrosAcertos(req, res) {
    dashboardModel.mostrarErrosAcertos().then(function(resultado){
        console.log(resultado)
        if (resultado.length > 0) {
            console.log('entrei no if')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    mostrarErrosAcertos
}