require("dotenv").config();
const mongoose = require("mongoose");
const createUser = require("./user").createUser;
const getUsers = require("./user").getUsers;

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(
    req.method + " " + req.path + " - " + "the body was: " + req.body
  );
  next();
});

app.get("/hello-world", (req, res) => {
  res.json({ message: "Hello World Eduardo" });
});

app.get("/is-mongoose-ok", (req, res) => {
  if (mongoose) {
    res.json({ isMongooseOk: !!mongoose.connection.readyState });
  } else {
    res.json({ isMongooseOk: false });
  }
});

router.post("/new-user", (req, res) => {
  const username = req.body.username;
  console.log("This is the username: ", username);

  createUser(username, (err, data) => {
    if (err) {
      res.status(400);
      res.json({ message: "Something happened" });
      return;
    }

    console.log(data);
    res.json(data);
  });
});

app.use("/api/exercise", router);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
