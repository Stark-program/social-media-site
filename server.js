const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("server working");
});

