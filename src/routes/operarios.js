const express = require("express");
const operariosSchema =require("../models/operarios");
const router= express.Router();

//crear operario
router.post('/operarios',(req,res)=>{
    const operario =  operariosSchema(req.body);
    operario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener operarios
router.get('/operarios',(req,res)=>{
   operariosSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener un operario
router.get('/operarios/:id',(req,res)=>{
    const { id }= req.params;
    operariosSchema
     .findById(id)
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

// actualizar un operario
router.put('/operarios/:id',(req,res)=>{
    const { id }= req.params;
    const {cedula,nombreCompleto,telefono,direccion,email} = req.body;
    operariosSchema
     .updateOne({ _id:id },{$set:{cedula,nombreCompleto,telefono,direccion,email}})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

 // eliminar un operario
router.delete('/operarios/:id',(req,res)=>{
    const { id }= req.params;
    operariosSchema
     .deleteOne({ _id:id })
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })


module.exports=router;