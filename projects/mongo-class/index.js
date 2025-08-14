const express = require("express");
const { UserModel, TodoModel } = require("./db");

const app = express();

app.use(express.json);

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  UserModel.insert({
    email: email,
    password: password,
    name: name,
  });

  req.json({
    message: "you are signed up",
  });
});

app.post("/signin", (req, res) => {});

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000);
