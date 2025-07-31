const express = require("express");
const loggerMiddlware = require("logger");

const app = express();

app.use(loggerMiddlware);

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.a);

  res.json({ a: a, b: b, sum: a + b });
});

// app.get("/sub", function (req, res) {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);

//   res.json({ a: a, b: b, subtract: a - b });
// });

// app.get("/multiply", function (req, res) {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);
//   ß;

//   res.json({ a: a, b: b, multiply: a * b });
// });

// app.get("/div", function (req, res) {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);

//   res.json({ a: a, b: b, div: a / b });
// });

app.listen(3000);
