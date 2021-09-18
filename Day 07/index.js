const express = require("express");

const app = express();

// security, performance, edge cases

app.get("/", (req, res) => {
  // res.status(200);
  // res.send("hello");
  res.status(200).send("Hemlo");
});

app.post("/", (req, res) => {
  res.json({ text: req.body });
});

// the path will match acd and abcd i.e b is optional
app.post("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// the path will match abcd,abbbcd abcd
app.post("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

// the path will match abcd,abxcd, abasdaecd
app.post("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get("/products", (req, res) => {
  res.send(req.query.q);
});

app.get("/user/:id/books/:bookId", (req, res) => {
  console.log(req.query);
  res.send(req.params);
});

app.listen(5000);
