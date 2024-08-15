const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
    },
    categoria:{
        type: String,
        required: true
    },
    imagen:{
        type: String
    }
});

module.exports = mongoose.model("Producto", productoSchema);
