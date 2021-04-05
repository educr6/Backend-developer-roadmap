var express = require("express");
var cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const upload = multer().single("upfile");
var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload, (req, res) => {
  if (req.file) {
    const { originalname: name, mimetype: type, size } = req.file;
    res.json({
      name,
      type,
      size,
    });
  } else {
    res.status(400).json({
      message: "No file uploaded",
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
