const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    if(authorId && authorId.length==24){
        let authorIdData = await authorModel.find({_id:authorId})
        if(authorIdData.length==0){
            res.send({msg:"the author is not present"})
        }
        else{
            let publisherId = book.publisher
            if(publisherId && publisherId.length==24){
                let publisherIdData = await publisherModel.find({_id:publisherId})
                if(publisherIdData.length==0){
                    res.send({msg: "the publisher is not present"})
                }
                else{
                    let bookCreated = await bookModel.create(book)
                    res.send({data: bookCreated})
                }
            }
            else{
                res.send({msg: "publisher Id is not present"})
            }
        }
    }
    else{
       res.send({msg:"author Id is not present."})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}

const updateBookPrice = async function (req, res){
    let findAuthor = await authorModel.find({rating: {$gt:3.5}}).select("_id")
    let BookPriceUpdate = []
    for(let i=0;i<findAuthor.length;i++){
        BookPriceUpdate.push(await bookModel
            .updateMany({author:findAuthor[i]},{$inc:{price:10}},{new:true}))
    }
    res.send({msg: BookPriceUpdate})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateBookPrice = updateBookPrice