const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
    },
    categoria:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Producto", productoSchema);