const express= require('express');
const mongoose=require("mongoose");
require("dotenv").config();
const operariosRoutes = require("./routes/operarios");
const proveedoresRoutes= require("./routes/proveedores");
const maquinasRoutes = require("./routes/maquinas");

const app = express();
const port= process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api',operariosRoutes);
app.use("/api",proveedoresRoutes);
app.use("/api",maquinasRoutes);


//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a la base de datos"))
.catch((error)=>console.error(error))
app.listen(port,()=>console.log('server listening on port',port))

