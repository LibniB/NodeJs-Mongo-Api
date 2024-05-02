const express = require("express");
const proveedoresSchema = require("../models/proveedores")
const router= express.Router();

// Crear proveedor
router.post('/proveedores',(req,res)=>{
    const proveedor = proveedoresSchema(req.body)
    proveedor
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener proveedores
router.get('/proveedores',(req,res)=>{
    proveedoresSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// // obtener un proveedor
router.get('/proveedores/:id', (req, res) => {
    const {id} = req.params;
    proveedoresSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//actualizar un proveedor
router.put('/proveedores/:id',(req,res)=>{
    const {id} = req.params;
    const {cedula, nombreCompleto,telefono,direccion,email} = req.body;
    proveedoresSchema
    .updateOne({_id:id},{ $set:{cedula, nombreCompleto,telefono,direccion,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// eliminar un proveedor
router.delete('/proveedores/:id',(req,res)=>{
    const {id} = req.params;
    proveedoresSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))  
})

module.exports = router