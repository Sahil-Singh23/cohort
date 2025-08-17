const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const r = await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({ message: "You are signed up " });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.json({ message: "you are signed in", token: token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

app.post("/todos", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000);
