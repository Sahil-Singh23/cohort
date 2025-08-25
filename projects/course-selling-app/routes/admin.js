const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const { z, email } = require("zod");
const { adminModel } = require("../db");

adminRouter.post("/signup", async (req, res) => {
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

  if (!safeParsedBody.success) {
    return res
      .status(400)
      .json({ message: "Incorrect format", error: safeParsedBody.error });
  }

  const { email, password, fname, lname } = safeParsedBody.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const dbResult = await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: fname,
      lastName: lname,
    });

    res.json({ message: "You are signed up sucessfullly " });
  } catch (e) {
    res.status(409).json({ message: "User already exists" });
  }
});

adminRouter.post("/signin", (req, res) => {});

adminRouter.post("/course", (req, res) => {});

adminRouter.put("/course", (req, res) => {});

adminRouter.get("/course", (req, res) => {});

adminRouter.use;

module.exports = {
  adminRouter: adminRouter,
};
