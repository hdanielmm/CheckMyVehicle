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
  const  name2  = req.body;
  const query = 'INSERT INTO technician SET ?';

  console.log(name);
  console.log(name2);

  mysqlConnection.query(query, { name }, (err, rows, fields) => {
    if (!err) {
      console.log('insertId', rows.insertId);
      res.json({ Status: 'Saved technician' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;