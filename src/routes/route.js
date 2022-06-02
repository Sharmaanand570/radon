const express = require('express');
const externalModule = require('../logger/logger')
const helperModule = require("../util/helper")
const validatorModule = require("../validator/formatter")
const lodash = require("lodash")

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

router.get('/hello',function (req, res){
    const allMonths = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
    console.log(lodash.chunk(allMonths,4))

    const oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumbers))

    const numbers = [1,2,5,5,2]
    console.log(lodash.union(numbers))

    const movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(movies))
})

module.exports = router;
// adding this comment for no reason