require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./routes/corsConnections");

// Connecting to the Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
