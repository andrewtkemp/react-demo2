const express = require("express");
const http = require("http");
const morgan = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3031;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/auth", {useNewUrlParser:true});

const app = express();

app.use(morgan("combined"));
app.use(express.json({type:"*/*"}));
app.use(express.urlencoded({extended:false}));

const routes = require("./router");

app.use(routes)

const server = http.createServer(app);


server.listen(PORT, ()=>{
    console.log("Tell my mom that i'm sorry.")
})