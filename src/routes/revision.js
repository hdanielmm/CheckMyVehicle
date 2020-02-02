const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/revision', (req, res) => {
  const query = 'SELECT * FROM revision';

  mysqlConnection.query(query, (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
});

router.post('/revision', (req, res) => {
  const { estado, vehiculoPlaca, empleadoId, fecha } = req.body;

  const query = 'INSERT INTO revision SET ?';

  mysqlConnection.query(query, { estado, vehiculoPlaca, empleadoId, fecha }, (err, rows, fields) => {
    !err ? res.json({ Status: 'Revisión guardada', revisionId: rows.insertId}) : console.log(err);
  });
});

module.exports = router;