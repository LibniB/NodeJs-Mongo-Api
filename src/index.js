const express= require('express');
const mongoose=require("mongoose");
const cors = require('cors');
require("dotenv").config();
const operariosRoutes = require("./routes/operarios");
const proveedoresRoutes= require("./routes/proveedores");
const maquinasRoutes = require("./routes/maquinas");
const usersRoutes = require("./routes/users");

const app = express();
const port= process.env.PORT || 9000;

// Enable CORS for specific origins or all origins
app.use(cors({
  origin: 'http://localhost:50183', // Allow only this origin
  // origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true // Allow credentials (cookies, etc.)
}));
// Add CORS middleware
//app.use((req, res, next) => {
//res.header('Access-Control-Allow-Origin', '*');
//res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//next();
//});

//middleware
app.use(express.json())
app.use('/api',operariosRoutes);
app.use("/api",proveedoresRoutes);
app.use("/api",maquinasRoutes);
app.use("/api",usersRoutes);


//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my APIiiiiiii");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a la base de datos"))
.catch((error)=>console.error(error))
app.listen(port,()=>console.log('server listening on port',port))

