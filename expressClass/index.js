const express = require("express");

const app = express();

function isOldEnoughMiddleWare(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json("You are not of age yet ");
  }
}

app.use(isOldEnoughMiddleWare);
app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have sucefully riden the ride one ",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have sucefully riden the ride two ",
  });
});

app.listen(443);
