const express = require('express');
const underscores = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    let firstelement = underscores.first(['Anand','Rahul','Raja'])
    console.log("The first element in array is "+firstelement)
    res.send("day 14 at FunctionUp")
});

router.get('/hello', function(req, res){
    res.send('Hello there!')
})

router.get('/candidates', function(req, res){
    console.log('Query parameters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('state is',state)
    console.log('gender is',gender)
    console.log('district is',district)
    let candidates = ['Anand','Ajay']
    res.send(candidates)
})

router.get('/candidates/:name',function(req, res){
    console.log('The request object is',JSON.stringify(req.params))
    console.log('candidates name is',req.params.name)
    res.send('done')
})


module.exports = router;
// adding this comment for no reason