const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://mongodb:27017/dockerdb")
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err.message);
  });

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Docker Compose + MongoDB Project 🚀",
  });
});

// POST API - Add Student
app.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student Added Successfully",
      data: student,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// GET API - Get All Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      total: students.length,
      data: students,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});