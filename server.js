
const config=require("./config/config") // Config file
const express=require("express");
const agenceRout = require("./router/agencerouter");
const app=express();
const port=3000;
app.use(express.json())
config();//Calling the function to set up the configuration
app.use('/api',agenceRout);
app.listen(port,()=>console.log("server is runing"))
 