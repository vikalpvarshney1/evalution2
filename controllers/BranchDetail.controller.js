const express = require("express");

const Branch = require("../models/BranchDetail.schemas");
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Branch).post);

//read
router.get("/", crudController(Branch).getAll);

//read one
router.get("/:id", crudController(Branch).getOne);

//update
router.patch("/:id", crudController(Branch).updateOne);


//delete
router.delete("/:id", crudController(Branch).deleteOne);

module.exports = router;