require("dotenv").config();
const express = require("express");
const app = express();
let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { mongo } = require("mongoose");
const { connect } = require("mongodb");
const router = express.Router();

const enableCORS = function (req, res, next) {
  if (!process.env.DISABLE_XORIGIN) {
    const allowedOrigins = ["https://www.freecodecamp.org"];
    const origin = req.headers.origin;
    if (!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      console.log(req.method);
      res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      });
    }
  }
  next();
};

// global setting for safety timeouts to handle possible
// wrong callbacks that will never be called
const TIMEOUT = 10000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

router.get("/is-mongoose-ok", function (req, res) {
  if (mongoose) {
    res.json({ isMongooseOk: !!mongoose.connection.readyState });
  } else {
    res.json({ isMongooseOk: false });
  }
});

const createUrl = require("./url").createUrl;
router.post("/shorturl/new", (req, res) => {
  console.log("I received a request with this: ", req.body);
  const urlToCreate =
    req.body.originalUrl ||
    req.body.url ||
    "https://www.youtube.com/watch?v=S9bCLPwzSC0";

  createUrl(urlToCreate, (err, data) => {
    if (err) {
      res.json({ message: "Something failed" });
    }
    res.json(data);
  });
});

app.use("/api", enableCORS, router);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
