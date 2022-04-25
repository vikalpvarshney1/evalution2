const mongoose = require("mongoose");

const masteraccountSchema = new mongoose.Schema({
    balance: { type: Number, required: true, unique: true },
 


});

const Masteraccount = mongoose.model("masteraccount", masteraccountSchema)

module.exports = Masteraccount;