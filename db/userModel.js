const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name :{
    type: String,
    required: [true, "please provide a name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    unique: [true, "duplicated email"],
  },
  password: {
    type: String,
    required: [true, "please provide an password"],
    unique: false,
  },
});


module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
