require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const app = express();

app.get("/hello-world", (req, res) => {
  res.json({ message: "Hello World Eduardo" });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
