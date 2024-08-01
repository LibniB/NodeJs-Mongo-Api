const mongoose = require("mongoose");

const operariosSchema = mongoose.Schema({
    cedula:{
        type:String,
       
    },
    nombreCompleto:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        
    },
    direccion:{
        type:String,
       
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
module.exports= mongoose.model('Operario', operariosSchema);
