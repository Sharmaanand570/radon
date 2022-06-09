const publisherModel = require("../models/publisherModel")

const createPublisher = async function (req, res){
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData = async function (req, res){
    let publisher = await publisherModel.find()
    res.send({data:publisher})
}

const UpdateHardCover = async function (req, res){
    let publisher = await publisherModel
        .updateMany({$or: [{name:"Penguin"},{name:"HarperCollins"}]},
        {
            $set:{
                isHardCover:true
            }
        })
    res.send({msg: publisher},{new:true})
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData
module.exports.UpdateHardCover = UpdateHardCover


