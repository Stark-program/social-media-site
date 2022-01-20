const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const collectionName = "devUsers";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
    sparse: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

const user_Schema = mongoose.model(collectionName, userSchema);

module.exports = user_Schema;
