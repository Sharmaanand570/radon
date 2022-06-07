const express = require('express');
var bodyParser = require('body-parser');

const {default:mongoose} = require('mongoose')

const route = require('./routes/route.js');

const app = express();


mongoose.connect("mongodb+srv://radon-AnandSharma:Anand570@cluster0.riu1k.mongodb.net/Anand570-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
