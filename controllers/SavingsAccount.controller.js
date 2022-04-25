const express = require("express");
const Savingaccount = require("../models/SavingsAccount.schemas");

const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Savingaccount).post);

//read
router.get("/", crudController(Savingaccount).getAll);

//read one
router.get("/:id", crudController(Savingaccount).getOne);

//update
router.patch("/:id", crudController(Savingaccount).updateOne);


//delete
router.delete("/:id", crudController(Savingaccount).deleteOne);

module.exports = router;