const mongoose = require("mongoose");

const fixedaccountSchema = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    intrestRate: { type: Number, required: true },
    startDate: { type: Number, required: true },
    maturityDate: { type: Number, required: true },
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },




});

const Fixedacount = mongoose.model("fixedaacount", fixedaccountSchema)

module.exports = Fixedacount;