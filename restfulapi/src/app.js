const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const port = process.env.PORT || 8000;
require("./db/connect");

const app = express(); // initalizing express

app.get("/", (req, res) => {
  res.send("hello Saurabh");
});

app.post("/student", (req, res) => {
  res.send("hello ");
});
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
