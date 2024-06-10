var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

router.get("/mostrarErrosAcertos", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.mostrarErrosAcertos(req, res);
});

router.get("/exibirMedia", function (req, res) {
    dashController.exibirMedia(req, res);
});

router.get("/exibirUsuarioFinal", function (req, res) {
    dashController.exibirUsuarioFinal(req, res);
});

module.exports = router;