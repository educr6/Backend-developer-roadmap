let express = require("express");
let app = express();

const PORT = 3000;

app.get("/hello-world", (req, res) => {
  res.json({ message: "Hello World" });
});

let listener = app.listen(PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
