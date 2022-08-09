const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const ticketSchema = new mongoose.Schema({
    title:{
        type:String,
     
    },
    description:{
        type:String,
    },

    priority: {
         default:'low'
    },

    assignedTo :{
        type: ObjectId,
        ref:"Users"

      
    },
    createdAt:{
        type:Date,
        default:Date.now

    }
}) 

const Ticket  = mongoose.model('Ticket' , ticketSchema)
module.exports = Ticket;