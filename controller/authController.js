const Users = require('../models/Users');
const jwt = require('jsonwebtoken')


const userRegister = async (req , res ) =>{
    const {username , role } = req.body;

    if(!username || !role){
       res.status(400).json("please add username and role")
    }

const savedUser =  await Users.findOne({username:username})
        if(!savedUser){
         res.status(404).json({error:"Username already registered"})
        }

const newUser = Users.create({username , role})
    


const token = jwt.sign({user_id:savedUser}, process.env.JWT_SECRET , {expiresIn : '1d'})
        res.status(200).json({token, newUser})

        
    newUser.token = token;


           

}

module.exports = {userRegister}