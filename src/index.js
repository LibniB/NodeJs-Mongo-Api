const express= require('express');
const mongoose=require("mongoose");

require("dotenv").config();
const operariosRoutes = require("./routes/operarios");
const proveedoresRoutes= require("./routes/proveedores");
const maquinasRoutes = require("./routes/maquinas");
const usersRoutes = require("./routes/users");
const productosRoutes = require("./routes/productos");

const app = express();
const port= process.env.PORT || 9000;


// Add CORS middleware
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.sendStatus(200);
});
//middleware
app.use(express.json())
app.use('/api',operariosRoutes);
app.use("/api",proveedoresRoutes);
app.use("/api",maquinasRoutes);
app.use("/api",usersRoutes);
app.use("/api",productosRoutes);


//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my APIiiiiiii");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a la base de datos"))
.catch((error)=>console.error(error))
app.listen(port,()=>console.log('server listening on port',port))

