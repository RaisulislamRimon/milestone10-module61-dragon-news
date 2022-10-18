const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("NEWS API RUNNING");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon News Server running on port `, port);
});
