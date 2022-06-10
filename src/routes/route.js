const express = require('express');


const router = express.Router();

router.get('/test-me', function (req, res, next) {
    res.send('My first ever api!')
    next()
});

router.get('/middleware', function (req, res, next){
    res.send("this is middleware")
    next()
})


module.exports = router;

// adding this comment for no reason
