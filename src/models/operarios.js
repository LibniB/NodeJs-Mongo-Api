const mongoose = require("mongoose");

const operariosSchema = mongoose.Schema({
    cedula:{
        type:String,
        required:true
    },
    nombreCompleto:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model('Operario', operariosSchema);