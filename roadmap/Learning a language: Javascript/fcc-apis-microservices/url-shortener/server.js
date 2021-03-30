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

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

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
router.post("/shorturl/new", (req, res, next) => {
  console.log("I received a request with this: ", req.body);
  const urlToCreate =
    req.body.original_url || req.body.url || "Didnt receive id";

  if (!validURL(urlToCreate)) {
    res.json({ error: "invalid url" });
    return;
  }
  createUrl(urlToCreate, (err, data) => {
    if (err) {
      res.json({ message: "Something failed" });
    }
    res.json({
      original_url: data.original_url,
      short_url: data.short_url,
    });
  });
});

const findUrlById = require("./url").findUrlById;
router.get("/shorturl/:id", (req, res) => {
  console.log("I received a get request with this: ", req.params.id);
  findUrlById(req.params.id, (err, data) => {
    if (err) {
      res.json({ message: "Something failed" });
    }
    res.redirect(data.original_url);
  });
});

app.use("/api", enableCORS, router);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
