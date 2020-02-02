const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/vehiculo', (req, res) => {
  mysqlConnection.query('SELECT * FROM vehiculo', (err, rows, fields) => {
    console.log(rows);
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/vehiculo/:placa', (req, res) => {
  const placa = req.params.placa;
  mysqlConnection.query('SELECT * FROM vehiculo WHERE placa = ?', [placa], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.post('/vehiculo', (req, res) => {
  const { placa, marca, linea, modelo } = req.body;

  const query = 'INSERT INTO vehiculo SET ?';

  mysqlConnection.query(query, { placa, marca, linea, modelo }, (err, rows, fields) => {
    if (!err) {
      console.log('insertId', rows.insertId);
      res.json({ Status: 'Saved vehiculo' });
    } else {
      console.log(err);
    }
  });
});

router.delete('/vehiculo/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM vehicle WHERE placa = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: "Deleted vehicle" });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;