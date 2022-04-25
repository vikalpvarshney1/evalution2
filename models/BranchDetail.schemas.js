const mongoose = require("mongoose");

const branchdetailSchema = new mongoose.Schema({
    first_name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    IFSC: { type: Number, required: true },
    MICR: { type: Number, required: true },
   

});

const Branch = mongoose.model("branchdetail", branchdetailSchema)

module.exports = Branch;