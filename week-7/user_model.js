const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true, // Fix: Changed 'require' to 'required'
    unique: true,
  },
  password: {
    type: String,
    required: true, // Fix: Changed 'require' to 'required'
  },
});

// Create the model
const User = mongoose.model("users", userSchema);

// Export the model
module.exports = User;
