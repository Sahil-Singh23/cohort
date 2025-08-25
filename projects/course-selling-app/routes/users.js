const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z, email } = require("zod");
const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().email("Email should be a valid email"),
    lname: z.string().min(2).max(100),
    fname: z.string().min(2).max(100),
    password: z
      .string()
      .min(6, "Password must have atleast 6 characters")
      .max(100, "Password can not have more than 100 characters")
      .regex(/[a-z]/, "Password must contain atleast one lowercase character")
      .regex(/[A-Z]/, "Password must contain atleast one uppercase character")
      .regex(/[^ a-zA-Z0-9]/, "Must contain atleast one special character"),
  });

  const safeParsedBody = requiredBody.safeParse(req.body);
  // returnes the entire error
  if (!safeParsedBody.success) {
    return res
      .status(400)
      .json({ message: "Incorrect format", error: safeParsedBody.error });
  }

  const { email, password, fname, lname } = safeParsedBody.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const dbResult = await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: fname,
      lastName: lname,
    });

    res.json({ message: "You are signed up sucessfullly " });
  } catch (e) {
    res.status(409).json({ message: "User email already exists" });
  }
});

userRouter.post("/signin", (req, res) => {});

// const auth = async (req, res, next) => {
//   const token = req.headers.token;

//   const decodedToken = jwt.verify(token, jwt_secret);
//   if (decodedToken) {
//     req.userId = decodedToken.userId;
//     next();
//   } else {
//     res.status(403).json({ message: "Invalid or expired token " });
//   }
// };

userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
