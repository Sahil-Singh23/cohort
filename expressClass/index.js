const express = require("express");
const app = express();
app.use(express.json());
let users = [
  {
    name: "Sahil",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const numberOfKindney = jhonKidneys.length;
  let numberOfHealthyKindneys = 0;
  for (var i = 0; i < numberOfKindney; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKindneys++;
    }
  }
  const numberOfUnHealthyKindneys = numberOfKindney - numberOfHealthyKindneys;
  res.json({
    numberOfKindney,
    numberOfHealthyKindneys,
    numberOfUnHealthyKindneys,
  });
});

app.post("/", function (req, res) {
  const isHealty = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealty,
  });

  res.json({
    msg: "done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({});
});

app.listen(3000);
