const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel.js")

//creating user data
const createUser = async function (req, res){
  try{
    let data = req.body
    let savedData = await userModel.create(data)
    res.status(201).send({msg: savedData})
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

//login and making token and verifying
const loginUser = async function(req, res){
  try{
    let userName = req.body.emailId
    let password = req.body.password
    // const {userName,password} = req.body
    const user = await userModel.findOne({emailId:userName,password})
    if(!user){
      res.status(404).send({status:false, msg:"username or the password is not corerct"})
    }
    else{
      let token = jwt.sign({userId:user._id.toString(),
                          batch: "radon",
                          organisation:"FunctionUp"
      },"functionUp-radon")
      res.status(201).setHeader("x-auth-token", token);
      res.status(201).send({ status: true, token: token })
    }
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

//see user data by authenticate and authorise
let getUserData = async function(req, res){
  try{
    let token = req.headers["x-auth-token"]
    if(!token){
      res.status(404).send({status: false, msg: "token must be present"})
    }
    else{
      console.log(token)
      try{
        const decodedToken = jwt.verify(token, "functionUp-radon")
        try{
          let userId = req.params.userId
          let userDetails = await userModel.findById(userId)
          if(userId===decodedToken.userId){
            res.status(200).send({ status: true, data: userDetails })
          }
          else{
            res.status(401).send("User not valid")
          } 
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

//update user detail
const updateUser = async function(req, res){
  try{
    let userData = req.body
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true})
    res.status(202).send({ status: true, data: updatedUser })
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

//delete user or isDeleted to true
const deleteUser = async function(req, res){
  try{
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if(userDetails.isDeleted == true){
      res.status(208).send("Data is already deleted")
    }
    else{
      await userModel.findByIdAndUpdate({_id:userId},{isDeleted:true},{new:true})
      res.status(202).send("user deleted")
    }
  }
  catch(error){
    res.status(500).send({msg:"Error :", Error : error.message})
  }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser