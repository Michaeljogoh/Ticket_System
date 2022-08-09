const jwt = require('jsonwebtoken');
const Ticket = require('../models/Ticket');

const authToken = async (req , res , next) =>{

const {authorization } = req.headers;
    if(!authorization){
        return res.status(401)
    }

const token = authorization.replace('Bearer', '')

const verify =  jwt.verify(token , process.env.JWT_SECRET, async (payload)=>{
        if(!verify){
            return res.status(401)
        }
const {_id} = payload

const userdata = await Ticket.findById(_id)
        req.user = userdata
        next()
    })
}

module.exports = { authToken }