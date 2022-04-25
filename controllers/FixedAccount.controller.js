const express = require("express");
const Fixedacount = require("../models/FixedAccount.schemas");
const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Fixedacount).post);

//read
router.get("/", crudController(Fixedacount).getAll);

//read one
router.get("/:id", crudController(Fixedacount).getOne);

//update
router.patch("/:id", crudController(Fixedacount).updateOne);


//delete
router.delete("/:id", crudController(Fixedacount).deleteOne);

module.exports = router;