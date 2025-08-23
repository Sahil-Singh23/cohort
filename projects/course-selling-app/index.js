const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.post("/user/signup", (req, res) => {});

app.post("/user/signin", (req, res) => {});

app.get("/courses", (req, res) => {});

app.get("/user/purchases", (req, res) => {});

app.post("/course/purchase", (req, res) => {});

app.listen(3001);
