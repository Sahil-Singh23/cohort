const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "helloimsahilsingh";

const users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  console.log(users);
  res.json({ message: "You are signed up" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    let token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    console.log(users);
    res.json({ message: "you are successfully signed in ", token: token });
  } else {
    res.status(403).json({ message: "Invalid user name or password" });
  }
});

app.get("/me", (req, res) => {
  let token = req.headers.token;
  let userName = jwt.verify(token, JWT_SECRET);

  let user = users.find((u) => u.username == userName);

  if (user) {
    res.json({ username: user.username, password: user.password });
  } else {
    res.status(401).json({ message: "invalid token" });
  }
});

app.listen(443);
