const mongoose= require("mongoose") ;

const userSchema= new mongoose.Schema({

    name: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true 
    },

    destination: {
        type: String,
        enum:["India","Africa","Europe","America"],
        required: true 
    },

    travelers : {
        type: Number,
        required: true 
    },

    budget : {
        type: Number,
        required: true 
    },

})

const User=mongoose.model("User",userSchema) ;
 
module.exports= User ;