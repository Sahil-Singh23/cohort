const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Serve static files (like frontend HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// Dummy database
let users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Dummy Express Server");
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add new user
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    age: parseInt(age),
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = name || user.name;
  user.age = age !== undefined ? parseInt(age) : user.age;
  res.json(user);
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: "User deleted" });
});

// Example with query parameters
app.get("/search", (req, res) => {
  const { name } = req.query;
  const result = users.filter((u) =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(result);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Something broke!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
