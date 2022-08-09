const mongoose = require('mongoose');
// Creating Schema 
const  userSchema  = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    role:{
        type:String,
        require:true
    },

})

const Users = mongoose.model('tickets' , userSchema)
module.exports = Users;