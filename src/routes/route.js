const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js')
const userController = require('../controllers/userController.js')
const orderController = require('../controllers/orderController.js')
const middleware = require('../middleware/middleware.js')

router.post("/createProduct", productController.createProduct)

router.post("/createUser", middleware.checkIsFreeAppUser ,userController.createUser)

router.post("/orderPurchase", middleware.checkId, 
                            middleware.checkIsFreeAppUser, 
                            orderController.userisFreeAppUserIsTrue)

module.exports = router;

