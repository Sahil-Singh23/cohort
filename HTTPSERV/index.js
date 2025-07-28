const express = require("express");

const app = express();

app.get("/add/:firstArg/:secondArg", function (req, res) {
  const a = parseInt(req.params.firstArg);
  const b = parseInt(req.params.secondArg);

  res.json({ a: a, b: b, sum: a + b });
});

app.get("/sub", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({ a: a, b: b, subtract: a - b });
});

app.get("/multiply", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  ß;

  res.json({ a: a, b: b, multiply: a * b });
});

app.get("/div", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({ a: a, b: b, div: a / b });
});

app.listen(3000);
