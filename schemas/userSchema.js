const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const collectionName = "devUsers";

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

const user_Schema = mongoose.model(collectionName, userSchema);

module.exports = signUpSchema;
