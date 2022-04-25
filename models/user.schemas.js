const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
   
});

const User = mongoose.model("user", userSchema)

module.exports = User;