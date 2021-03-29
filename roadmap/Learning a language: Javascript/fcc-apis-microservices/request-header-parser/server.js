require("dotenv").config();
let express = require("express");
let app = express();

const PORT = 3000;

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/hello-world", (req, res) => {
  res.json({ message: "Hello World" });
});

let listener = app.listen(PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
