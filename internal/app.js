const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import Routers
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const carRoutes = require('./routes/carRoutes');

// const mongoUri = "mongodb+srv://hexis-db:hBMq8wfQJuZ0chWv@cluster0.o6lj7w1.mongodb.net/?retryWrites=true&w=majority";
const mongoUri = "mongodb://localhost:27017/ropstam_test_task";

// Connect Mongo
mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(process.env.PORT || 2000);
        console.log("Server Start");
    })
    .catch(err=>{
        console.log(err);
    });

// Middleware
app.use(express.json());
// Disable Cors
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: ['SET-COOKIE'],
}));

// Set Cookie Parser
app.use(cookieParser());
 
// Routes
app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/car', carRoutes);



//Route for 404 request 
app.use((req,res)=>{

    // res.cookie('jwt', "token").send();
    res.status(404).json({
        success: false,
        data:[],
        message:"404 Not Found"
    });

});
