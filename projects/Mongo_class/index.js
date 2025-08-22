const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const r = await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({ message: "User already exists" });
    return;
  }

  res.json({ message: "You are signed up " });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    res.status(403).json({ message: "Invalid email" });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.json({ message: "you are signed in", token: token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({ message: "You are not logged in" });
  }
};

app.post("/todo", auth, (req, res) => {});

app.get("/todos", auth, (req, res) => {});

app.listen(3000);
