const mongoose = require("mongoose");

const savingaccountSchema = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    intrestRate: { type: Number, required: true },
  


});

const Savingaccount = mongoose.model("savingaccount", savingaccountSchema)

module.exports = Savingaccount;