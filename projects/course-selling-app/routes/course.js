const express = require("express");
const courseRouter = express.Router();
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");

courseRouter.get("/preview", async (req, res) => {
  const allCourses = await courseModel.find({});

  res.json({ courses: allCourses });
});

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  const r = await purchaseModel.create({
    userId,
    courseId,
  });

  if (r) {
    res.json({ message: "You have succesfully bought the course" });
  } else {
    res.status(500);
  }
});

module.exports = {
  courseRouter: courseRouter,
};
