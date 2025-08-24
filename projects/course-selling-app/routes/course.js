const express = require("express");
const courseRouter = express.Router();

courseRouter.get("/preview", (req, res) => {});

courseRouter.post("/purchase", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
