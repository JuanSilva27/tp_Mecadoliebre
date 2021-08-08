const express= require("express");
const app= express();
const port=3030;
const path= require("path")

app.get("/",(req,res)=>res.send("Hola"));

app.listen(port,()=>console.log("se levanto servidor en puerto "+ port));