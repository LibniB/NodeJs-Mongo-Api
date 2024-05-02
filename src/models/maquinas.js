const mongoose = require("mongoose");

const maquinasSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Maquina',maquinasSchema);