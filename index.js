const express = require("express");

const app = express();

const unused =332;


app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!");
});

app.get("/test", (req, res) => {
  res.send("hey this is testing api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
