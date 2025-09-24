const { books } = require("../database/connection")

exports.fetchBook=async (req,res)=>{
    const datas=await books.findAll()
    res.json({
        message:"books fetched successfully..",
        data:datas
    })

}

exports.singleFetchedBook=async (req,res)=>{
    const id=req.params.id
   const data= await books.findByPk(id)
    res.json({
        message:" single book  fetched successfully",
        data
    })
}


exports.addBook=async  (req,res)=>{

    const {bookName,bookPrise,bookAuthor,bookGenre}=req.body
    const data=await books.create({
        bookName,
        bookPrise,
        bookAuthor,
        bookGenre
    })

    res.json({
        message:"Book added successfully..",
        data
    })

}


exports.deleteBook=async (req,res)=>{



}


exports.editBook=async (req,res)=>{

}