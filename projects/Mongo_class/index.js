const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  //input validation using zod
  const requiredBody = z.object({
    email: z.string().email("Email should be a valid email"),
    name: z.string().min(2).max(50),
    password: z
      .string()
      .min(6, "Password must have atleast 6 charracters")
      .max(100, "Password can not have more than 100 characters")
      .regex(/[A-Z]/, "Password must contain atleast one uppercase character")
      .regex(/[a-z]/, "Password must contain atleast one lowercase character")
      .regex(/^[A-za-z0-9]/, "Must contain atleast one special character"),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success) {
    res.json({ message: "Incorrect format", error: parsedData.error });
    return;
  }
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
    res.status(409).json({ message: "User already exists" });
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
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "30d" });

    res.json({ message: "you are signed in", token: token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

const auth = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData) {
      req.userId = decodedData.id;
      next();
    } else {
      return res.status(403).json({ message: "You are not logged in" });
    }
  } catch (e) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const todo = req.body.title;
  if (todo.length > 1) {
    const r = await TodoModel.create({
      title: todo,
      done: false,
      userId: userId,
    });
    res.json({ message: "New todo Added" });
    return;
  }
  res.json({ message: "Todo is empty" });
});

app.get("/todos", auth, async (req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.userId });
    if (!todos || todos.length === 0) {
      return res.json({ message: "No todos for the user", todos: [] });
    }
    res.json({ todos: todos });
  } catch (e) {
    res.status(500).json({ message: "Error fetching todos" });
  }
});

app.listen(3000);
