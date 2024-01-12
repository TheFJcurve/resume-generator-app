const express = require("express");
require("dotenv").config();

const app = express();
app.listen(4000, () => {
  console.log("Server is running on port", process.env.PORT);
});

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.send("Hello from server");
});
