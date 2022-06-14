const userModel = require('../models/usersModel.js')
const productModel = require('../models/productModel.js')

const checkIsFreeAppUser = function(req, res, next){
    let checkIsFreeAppUser = req.headers
    if(!checkIsFreeAppUser.isfreeappuser){
        res.send(" request is missing a isFreeAppUser header") 
    }
    else{
        next()
    }
}

const checkId= async function (req, res, next) {
    let requestBody = req.body
    let userId = requestBody.userId
    if(userId && userId.length==24){
        let userIdData = await userModel.find({_id:userId})
        if(userIdData.length==0){
            res.send({msg:"the user is not present"})
        }
        else{
            let productId = requestBody.productId
            if(productId && productId.length==24){
                let productIdData = await productModel.find({_id:productId})
                if(productIdData.length==0){
                    res.send({msg: "the product is not present"})
                }
                else{
                    next()
                }
            }
            else{
                res.send({msg: "product Id is not present"})
            }
        }
    }
    else{
       res.send({msg:"user ID is not present."})
    }
}

module.exports.checkIsFreeAppUser = checkIsFreeAppUser
module.exports.checkId = checkId