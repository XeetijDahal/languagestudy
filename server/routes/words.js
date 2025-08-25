const express = require("express");
const router = express.Router();
const pool = require("../db");


router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM words ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const { english, nepali, german } = req.body;
    const result = await pool.query(
      "INSERT INTO words (english, nepali, german) VALUES ($1, $2, $3) RETURNING *",
      [english, nepali, german]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

module.exports = router;
