const productoSchema = require("../models/productos");
const express = require("express");
const router = express.Router();


//crear producto
router.post('/productos',(req,res)=>{
    const producto =  productoSchema(req.body);
    producto
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener producto
router.get('/productos',(req,res)=>{
   productoSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

// obtener un producto
router.get('/productos/:id',(req,res)=>{
    const { id }= req.params;
    productoSchema
     .findById(id)
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

// actualizar un producto
router.put('/productos/:id',(req,res)=>{
    const { id }= req.params;
    const {nombre,precio,descripcion,categoria} = req.body;
    productoSchema
     .updateOne({ _id:id },{$set:{nombre,precio,descripcion,categoria}})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

 // eliminar un producto
router.delete('/productos/:id',(req,res)=>{
    const { id }= req.params;
    productoSchema
     .deleteOne({ _id:id })
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message:error}))
 })

 module.exports = router;

