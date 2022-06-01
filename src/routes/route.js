const express = require('express');
const externalModule = require('../logger/logger')
const helperModule = require("../util/helper")
const validatorModule = require("../validator/formatter")

const router = express.Router();

router.get('/test-me',function(req, res){
    res.send("This is my first node.js Assignment")
    externalModule.welcome()
    helperModule.printDate()
    helperModule.printMonth()
    helperModule.getBatchinfo()
    validatorModule.trim()
    validatorModule.changetoLowerCase()
    validatorModule.changetoUpperCase()
})

module.exports = router;
// adding this comment for no reason