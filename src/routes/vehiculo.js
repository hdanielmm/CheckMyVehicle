const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

const VehiculoController = require('../controllers/vehiculo');

router.get('/vehiculo', VehiculoController.vehiculos_get_all);

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
      res.json({ Status: 'Vehiculo guardado', id: rows.insertId });
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