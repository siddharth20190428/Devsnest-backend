const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const checkAdmin = (req, res, next) => {
  if (req.query.auth === "asrsadeacsad") {
    next();
  } else {
    res.status(401).send("should be admin");
  }
};

const sendRes = (req, res) => {
  res.status(200);
  res.json(req.query);
};

app.use(express.urlencoded());
app.use(express.json({ extended: true }));

app.get("/", checkAdmin, sendRes);
app.post("/", (req, res) => {
  res.json(req.body);
});
app.listen(5000);
