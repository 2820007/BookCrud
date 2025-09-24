const express=require("express")

const bookRouter=require("./routers/book.router.js")

require("./database/connection.js")
const app=express()
app.use(express.json());


app.use("/api/",bookRouter)




app.listen(3000, ()=>{
     console.log("server is running on port no 3000");
     
})



