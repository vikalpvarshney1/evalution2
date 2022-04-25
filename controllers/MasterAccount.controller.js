const express = require("express");
const Masteraccount = require("../models/MasterAccount.schemas");


const crudController = require("./curd.controller")
const router = express.Router();

//create
router.post("/", crudController(Masteraccount).post);

//read
router.get("/", crudController(Masteraccount).getAll);

//read one
router.get("/:id", crudController(Masteraccount).getOne);

//update
router.patch("/:id", crudController(Masteraccount).updateOne);


//delete
router.delete("/:id", crudController(Masteraccount).deleteOne);

module.exports = router;