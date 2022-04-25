const express = require("express");

const User = require("../models/user.Schemas");
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(User).post);

//read
router.get("/", crudController(User).getAll);

//read one
router.get("/:id", crudController(User).getOne);

//update
router.patch("/:id", crudController(User).updateOne);


//delete
router.delete("/:id", crudController(User).deleteOne);









// router.post("/", async(req, res) => {
//     const createdBook = await Book.create(req.body);
//     res.status(201).json(createdBook)
// });

// //read
// router.get("/",async (req, res) => {
//     const books = await Book.find();
//     res.status(200).json(books)
// });

// //read one
// router.get("/:id", async(req, res) => {
//     const book = await Book.findById(req.params.id);
//     res.status(200).json(book);
// });

// //update
// router.patch("/:id", async(req, res) => {
//     const updatedBook = await Book.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new : true}
//     )
//     res.status(200).json(updatedBook)
// });


// //delete
// router.delete("/:id", async(req, res) => {
//     const deletedBook = await Book.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedBook)
// });
module.exports = router;