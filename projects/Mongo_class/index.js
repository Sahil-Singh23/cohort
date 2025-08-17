const express = require("express");
const { UserModel, TodoModel } = require("./db");
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

app.post("/signin", (req, res) => {});

app.post("/todos", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000);
