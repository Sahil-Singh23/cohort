const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { connectDb } = require("./db");
connectDb();

const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

app.listen(3001);
