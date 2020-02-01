const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/item', (req, res) => {
  const query = 'SELECT * FROM item';

  mysqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


router.post('/item', (req, res) => {
  const { name, review_id, technician_id, comments, checked } = req.body;

  const query = 'INSERT INTO item SET ?';

  mysqlConnection.query(query, { name, review_id, technician_id, comments, checked }, (err, rows, fields) => {
    !err ? res.json({ Status: 'Saved review' }) : console.log(err);
  });
});

module.exports = router;