require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
const app = express();
const userSchema = require("./schemas/userSchema");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
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

app.post("/userSignup", async (req, res) => {
  console.log(req.body);
  let email = req.body.userEmail;
  let pass = req.body.userPassword;

  let hashPass = await bcrypt.hash(pass, 10);

  user = new userSchema({
    email: email,
    password: hashPass,
  });
  console.log("user being saved", user);
  try {
    userSchema.exists({ email: email }, async function (err, result) {
      console.log("this is result", result);
      if (err) {
        res.send(err);
        console.log(err);
      } else if (result || email === null) {
        res.send({
          status: 409,
          message: "Username is already taken, please enter in a new username",
        });
      } else if (result === false || result === null) {
        await user.save((err, user) => {
          console.log("this is user", user);
          if (err) console.log(err);
          res.status(201).send();
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3001, () => {
  console.log("server working");
});
