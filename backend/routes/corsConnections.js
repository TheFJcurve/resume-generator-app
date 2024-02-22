const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./resumes");
const path = require("path");

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/webpage.html"));
});

module.exports = app;
