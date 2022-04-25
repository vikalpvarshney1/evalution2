const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");
const DB_URL = "mongodb://masaiuser:masaipassword@localhost:27017/masai";

//import of controllerrs
const branchdetailController = require("./controllers/BranchDetail.controller")
const fixedaccountController = require("./controllers/FixedAccount.controller")
const masteraccountController = require("./controllers/MasterAccount.controller")
const savingsaccountController = require("./controllers/SavingsAccount.controller")
const userController = require("./controllers/User.controller")
let app = express();
app.use(express.json());
app.use(cors())
const connect = () => {
    return mongoose.connect(DB_URL);
}

//to access the controllers we use middleware
app.use("/branchdetail", branchdetailController);
app.use("/fixedaccount", fixedaccountController);
app.use("/masteraccount", masteraccountController);
app.use("/savingsaccount", savingsaccountController);
app.use("/user", userController);


app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening on PORT: ${PORT}`);
    }
    catch (e) {
        console.log(e.messsage);
    }
});