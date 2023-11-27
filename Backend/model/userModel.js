const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please provide company name"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, "Please provide contact number"],
    minLength: 6,
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
