const ticket = require('../models/Ticket')

// Create Ticket
const createTicket = async (req , res ) =>{
    const {title , description } = req.body
    if(!title || !description ){
        res.status(409)
    }

const newTicket = await ticket.create({title , description , assignedTo:req.user})
    res.status(201)

}

// By pagination
const queryTicket = async (req , res ) =>{
    const {page = 1 , limit = 5} = req.query
    const  queryTicket = await ticket.find()
    .populate("assignedTo", "username") 
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
 
 //Get total tweets
 const count = await ticket.countDocuments();
 res.status(200).json({queryTicket, totalPages:Math.ceil(count / limit), currentPage: page})

}

// Get by Id
const TicketById = async (req , res) =>{
    const newTweet = await Tweets.findById(req.params.id);
    if(!newTweet){
      return res.status(204).json('Tweet Not Available')
    }
 
 res.status(200).json({newTweet});   
  

}

// Search for ticket by ticket
const searchTicket  = async (req , res ) =>{
    const {page = 1, limit = 5} = req.query;
    const searchTicket = await ticket.find({'$options':[{title:{$regex:req.params.word}}]})
    .limit(limit * 1)
    .skip((page - 1 ) * limit)
    .exec();
    //Get Total documents in blogPost collection
const search = await ticket.countDocuments();
    res.status(200).json({searchTicket,  totalPages:Math.ceil(search/ limit), currentPage: page});
}

const deleteTicket  =  async (req , res) =>{
    const newTicket = await ticket.findById(req.params.id)
      if(!newTicket){
        return res.status(204).json('Tweet Not Available')
      }
      if(newTicket.assignedTo._id.toString() === req.user._id.toString()){
       const newDeleteTicket = await ticket.findByIdAndDelete(req.params.id)
        res.status(200).json({newDeleteTicket})
      } else {
        res.status(401).json("You Can Delete Only Your Post!")
      }
    }

module.exports = {createTicket ,  queryTicket , TicketById , searchTicket} 