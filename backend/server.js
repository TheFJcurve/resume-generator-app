const express = require("express");
const resumeRoutes = require("./routes/resumes");
require("dotenv").config();

// Setting up the server
const app = express();
app.listen(4000, () => {
  console.log("Server is running on port", process.env.PORT);
});

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Setting up the Routes
app.use("/api/resume", resumeRoutes);
