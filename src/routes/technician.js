const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/technician', (req, res) => {
  const query = 'SELECT * FROM technician';

  mysqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post('/technician', (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO technician SET ?';

  mysqlConnection.query(query, { name }, (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Saved technician' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;