const express = require("express");
const maquinasSchema =require("../models/maquinas");
const router= express.Router();

//crear maquina
router.post('/maquinas',(req,res)=>{
    const maquina =  maquinasSchema(req.body);
    maquina
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener maquinas
router.get('/maquinas',(req,res)=>{
   maquinasSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener una maquina
router.get('/maquinas/:idM',(req,res)=>{
    const { idM }= req.params;
    maquinasSchema
     .findById(idM)
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

// actualizar una maquina
router.put('/maquinas/:idM',(req,res)=>{
    const { idM }= req.params;
    const {id,nombre} = req.body;
    maquinasSchema
     .updateOne({ _id:idM },{$set:{id,nombre}})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

 // eliminar una maquina
router.delete('/maquinas/:idM',(req,res)=>{
    const { idM }= req.params;
    maquinasSchema
     .deleteOne({ _id:idM })
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })


module.exports=router;