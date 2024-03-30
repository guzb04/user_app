const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("sucessfully connected to mongoDB atlas");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = dbConnect;
