var express = require("express");
var router = express.Router();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query('SELECT * FROM "users"', (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

module.exports = router;
