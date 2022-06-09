const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    name: String,
    age: Number,
    address: String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)
