const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./resumes");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-generator-app-rosy.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

module.exports = app;
