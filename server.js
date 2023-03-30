// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// nodemon server.js 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb+srv://entc:entc@cluster0.orqgnne.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://entc:entc@cluster0.orqgnne.mongodb.net/notesdbentc");

app.use("/", require("./routes/noteRoute"));

app.listen(3001, function(){
    console.log("express server is running on Port 3001");
})