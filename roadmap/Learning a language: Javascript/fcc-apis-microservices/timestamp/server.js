let express = require("express");
let timestamp = require("./timestamp");
let app = express();

const PORT = 3000;

app.get("/hello-world", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/timestamp/:date", (req, res) => {
  let result = timestamp(req.params.date);
  res.json(result);
});

app.get("/api/timestamp/", (req, res) => {
  let result = timestamp();
  res.json(result);
});

let listener = app.listen(PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
