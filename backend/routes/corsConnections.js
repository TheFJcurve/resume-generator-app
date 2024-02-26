const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./resumes");
const path = require("path");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:80",
  "http://localhost:5173",
  "https://resume-generator-app-red.vercel.app",
  "https://resume-generator-app.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use((req, _, next) => {
  console.log(req.path, req.method);
  next();
});

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

app.use((_, res) => {
  res.sendFile(path.join(__dirname + "/webpage.html"));
});

module.exports = app;
