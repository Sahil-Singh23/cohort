const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {});

userRouter.post("/signin", (req, res) => {});

const auth = async (req, res, next) => {
  const token = req.headers.token;

  const decodedToken = jwt.verify(token, jwt_secret);
  if (decodedToken) {
    req.userId = decodedToken.userId;
    next();
  } else {
    res.status(403).json({ message: "Invalid or expired token " });
  }
};

userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
