const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = process.env.PORT
const errorHandler = require('./middleware/errorHandler');
const authRoute = require('./routes/authRoute');
const ticket = require('./routes/ticket');



// Connect MongoDB
const  connectDB = async () =>{
    await mongoose.connect(process.env.Ticket_DB,{useNewUrlParser: true , useUnifiedTopology: true})
     console.log('MongoDB')
}
   connectDB();

//cross origin 
app.use(cors({Credential:true , origin: true}))

//error handler
app.use(errorHandler);

// routes
app.use(authRoute)
app.use('' , ticket)




app.listen(PORT , ()=>{
    console.log(`Server started at ${PORT}`)
})
