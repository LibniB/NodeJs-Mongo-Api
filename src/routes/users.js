const express = require("express");
const operariosSchema =require("../models/users");
const router= express.Router();

//crear operario
router.post('/users',(req,res)=>{
    const usuario =  usersSchema(req.body);
    usuario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener operarios
router.get('/users',(req,res)=>{
   usersSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener un operario
router.get('/users/:id',(req,res)=>{
    const { id }= req.params;
    usersSchema
     .findById(id)
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

// actualizar un operario
router.put('/users/:id',(req,res)=>{
    const { id }= req.params;
    const {nombreCompleto,email,password} = req.body;
    usersSchema
     .updateOne({ _id:id },{$set:{nombreCompleto,email,password}})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

 // eliminar un operario
router.delete('/users/:id',(req,res)=>{
    const { id }= req.params;
    usersSchema
     .deleteOne({ _id:id })
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })


module.exports=router;
