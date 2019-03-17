var express = require("express");
var router = express.Router();

// import model to use its DB function
var burger = require("../models/burger.js");

// Create routes
router.get("/", function (req, res) {
    burger.showAll().then(function (result) {
        console.log(result);

        res.render("index", { burger: result });
    })
});

module.exports = router;