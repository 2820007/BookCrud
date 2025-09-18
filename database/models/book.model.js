


const bookModel=(sequelize,DataTypes)=>{
    const Book=sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING,
            allowedNull:false
        },
        bookPrise:{
            type:DataTypes.INTEGER,
            allowedNull:false,
        },
        bookAuthor:{
            type:DataTypes.STRING,
            allowedNull:false
        }
        ,
        bookGenre:{
            type:DataTypes.STRING
        }
    }) 
    return Book
}

module.exports=bookModel