const userModel = require("../models/usersModel.js")

const createUser= async function (req, res) {
    let user = req.body
    let createdUser = await userModel.create(user)
    res.send({data: createdUser})
}

module.exports.createUser = createUser