import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home", (req, res) => {
  res.send("Sahil s World");
});
app.listen(443);

// - **Node.js** → **Express**
// - **Java** → **Spring Boot**
// - **Python** → **Flask**
// - **Rust** → **Actix-web**

// These frameworks help build HTTP servers and web applications efficiently in each respective language.
