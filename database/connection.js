require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")
const bookModel=require("./models/book.model")







//Database connection method

const sequelize=new Sequelize(process.env.CS)

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated ,database connected successfully!!");
    
})
.catch((err)=>{
    console.log("Error while database connection"+err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

 db.book=bookModel(sequelize,DataTypes)
 sequelize.sync({alter:false}).then(()=>{
    console.log("migrate vyo...")
 })

 
module.exports=db