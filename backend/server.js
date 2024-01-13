const express = require("express");
const resumeRoutes = require("./routes/resumes");
require("dotenv").config();
const mongoose = require("mongoose");

// Setting up the server
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Setting up the Routes
app.use("/api/resumes", resumeRoutes);

// Connecting to the Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
