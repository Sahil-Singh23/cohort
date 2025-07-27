const express = require("express");

const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  }
  return false;
}

function isOldEnoughMiddleWare(res, req, next) {
  if (age >= 14) {
    next();
  } else {
    res.json("You are not of age yet ");
  }
}

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
