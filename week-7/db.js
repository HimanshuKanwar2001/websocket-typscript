const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Not able to connect to the server:", err.message);
  }
}

module.exports = connectToDB;
