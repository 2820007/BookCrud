const { fetchBook, addBook, deleteBook, editBook, singleFetchedBook } = require("../controllers/book.controller")

const router=require("express").Router()

router.route("/books").get(fetchBook).post(addBook)

router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchedBook)




module.exports=router