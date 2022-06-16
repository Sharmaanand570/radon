const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

//To Authenticate the user
let authenticate = async function(req, res, next){
  try{
    let token = req.headers["x-auth-token"]
    if(!token){
      res.status(404).send({status: false, msg: "token must be present"})
    }
    else{
      console.log(token)
      try{
        jwt.verify(token, "functionUp-radon")
        try{
          let userId = req.params.userId
          await userModel.findById(userId)
          next()
        }
        catch(error){
          res.status(404).send({ msg:"Error", Error: error.message })
        }
      }
      catch(error){
        res.status(406).send({ msg:"Error", Error:error.message})
      }
    }
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

//to authorise the user
let authorise = async function(req, res, next){
  try{
    let userId = req.params.userId
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionUp-radon")
    if(userId===decodedToken.userId){
        next()
    }
    else{
        res.status(401).send("User not valid")
    }
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise