const express = require('express');
const moment = require('moment')

var bodyParser = require('body-parser');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.use(function (req, res){
    currentDateAndTime = moment().format("YYYY-MM-DD HH:MM:SS")
    currentIP = req.ip
    cuurentRequestPath = req.path
    console.log(currentDateAndTime,",", currentIP,",",cuurentRequestPath)
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
