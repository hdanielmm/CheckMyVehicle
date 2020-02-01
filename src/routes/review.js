const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/review', (req, res) => {
  const query = 'SELECT * FROM review';

  mysqlConnection.query(query, (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
});

router.post('/review', (req, res) => {
  const { date_review, license_plate } = req.body;

  const query = 'INSERT INTO review SET ?';

  mysqlConnection.query(query, {date_review, license_plate}, (err, rows, fields) => {
    !err ? res.json({ Status: 'Saved review' }) : console.log(err);
  });
});

module.exports = router;