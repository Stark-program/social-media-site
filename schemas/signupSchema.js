const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const collectionName = "devUsers";

const signUpSchema = new Schema({
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

const sign_Up_Schema = mongoose.model(collectionName, signUpSchema);

module.exports = signUpSchema;
