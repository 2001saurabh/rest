const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-api")
  .then(() => {
    console.log("connection established..");
  })
  .catch((err) => console.log("failed to connect"));
