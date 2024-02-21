const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./resumes");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-generator-app-rosy.vercel.app",
  "https://resume-generator-backend-six.vercel.app/",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

app.use((req, res, next) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Resume Generator</title>
    <style>
      body {
        background-color: black;
        color: white;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <h1>Resume Generator Backend</h1>
  </body>
  </html>`);
  console.log(req.path, req.method);
  next();
});

module.exports = app;
