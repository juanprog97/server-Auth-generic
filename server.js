var express = require("express");
app = express();
port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("This a first hello world");
});

app.listen(port, () => {
  console.log("Server status on:" + port);
});
