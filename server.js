const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
