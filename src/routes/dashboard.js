var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

router.get("/mostrarErrosAcertos", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.mostrarErrosAcertos(req, res);
});

module.exports = router;