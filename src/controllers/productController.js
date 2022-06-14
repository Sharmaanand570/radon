const productModel = require("../models/productModel.js")

const createProduct= async function (req, res) {
    let product = req.body
    let createdProduct = await productModel.create(product)
    res.send({data: createdProduct})
}


module.exports.createProduct = createProduct