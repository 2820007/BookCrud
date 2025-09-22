const express=require("express")
const { books } = require("./database/connection.js")

require("./database/connection.js")
const app=express()


app.get("/books", async (req,res)=>{
    const data=await books.findAll()
    res.json({
        message:"books fetched successfully...",
        data
    })
})

app.get("/about",(req,res)=>{
    res.send("about page")
})


app.listen(3000, ()=>{
     console.log("server is running on port no 3000");
     
})



