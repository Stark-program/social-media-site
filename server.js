require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const uri = process.env.DEV_MONGODB;
console.log(uri);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
mongoose.set("returnOriginal", false);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection established");
});

app.post("/userSignup", (req, res) => {
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("server working");
});
