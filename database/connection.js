
const {Sequelize,DataTypes}=require("sequelize")







const sequelize=new Sequelize("postgresql://postgres.wiaigcwcwikpuevbwmmv:ravieducation1234@aws-1-ap-south-1.pooler.supabase.com:6543/postgres")

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