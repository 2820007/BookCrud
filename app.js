const express=require("express")

require("./database/connection.js")
const app=express()


app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})



app.listen(3000, ()=>{
     console.log("server is running on port no 3000");
     
})

""

