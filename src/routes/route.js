const express = require('express');
const router = express.Router();

//Problem 1
const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies',function (req, res){
    res.send(movies)
})

// Problem 2
router.get('/movies/:indexNumber',function (req, res){
    const indexNumber = req.params.indexNumber 
    if(indexNumber<movies.length){
        res.send(movies[indexNumber-1])
    }
    else{
        res.send("use a valid index")
    }
})

//Problem 3
const films = [ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
router.get('/films',function(req,res){
    res.send(films)
})

//Problem 4
router.get('/films/:filmId',function(req, res){
    const filmId = req.params.filmId
    if(filmId<films.length){
        res.send(films[filmId-1])
    }
    else{
        res.send("No movie exists with this id")
    }
})
module.exports = router;