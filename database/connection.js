require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")






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
module.exports=db