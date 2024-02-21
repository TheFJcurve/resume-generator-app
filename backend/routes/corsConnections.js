const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./resumes");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-generator-app.onrender.com",
  "https://resume-generator-app-rosy.vercel.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

module.exports = app;
