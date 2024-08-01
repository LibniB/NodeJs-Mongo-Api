const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    nombreCompleto:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
      type:String,
      required:true
    }
});
module.exports= mongoose.model('Usuario', usersSchema);
