const orderModel = require('../models/orderModel.js')
const userModel = require('../models/usersModel')
const productModel = require('../models/productModel')

const userisFreeAppUserIsTrue = async function(req, res, next){
    let purchase = req.body
    
    if(req.headers["isfreeappuser"] === 'true' ){
        await userModel.updateOne({_id:purchase.userId},{$set:{isFreeAppUser:true}})
        let orderPurchase = await orderModel.create({
            userId:purchase.userId,
	        productId: purchase.productId,
	        amount: 0,
	        isFreeAppUser: true, 
	        date: purchase.date
        })
        res.send({data: orderPurchase})
    }
    else if(req.headers["isfreeappuser"] === 'false'){
        let productPrice = await productModel.findOne({productId:purchase.productId}).select({_id:0,price:1})
        let userBalance = await userModel.findOne({_id:purchase.userId}).select({_id:0,balance:1})
        if(productPrice.price>=userBalance.balance){
            res.send("Insufficient Balance")
        }
        else {
            leftBalance = userBalance.balance - productPrice.price
            await userModel.updateOne({_id:purchase.userId},{$set:{balance:leftBalance}})
            let orderPurchase = await orderModel.create({
                userId:purchase.userId,
                productId: purchase.productId,
                amount: productPrice.price,
                isFreeAppUser:false,
                date: purchase.date
            })
            res.send({data:orderPurchase})
        }
    }
    else{
        res.send("isfreeappuser value should be true or false")
    }
}
module.exports.userisFreeAppUserIsTrue = userisFreeAppUserIsTrue