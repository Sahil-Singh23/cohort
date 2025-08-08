const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "HELLOSAHILSINGH";
let users = [];

const auth = (req, res, next) => {
  const token = req.headers.token;
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};

app.use(express.json());
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  users.push({
    username: username,
    password: password,
    email: email,
  });

  res.json({ message: "you are signed up" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({ token: token });
  } else {
    res.status(401).json({ message: "invalid username or password " });
  }
});

app.get("/me", auth, (req, res) => {
  const user = users.find((u) => u.username === req.user.username);

  if (user) {
    res.json({ username: user.username, email: user.email });
  } else {
    res.status(403).json({ message: "user not found " });
  }
});

app.listen(3000);
