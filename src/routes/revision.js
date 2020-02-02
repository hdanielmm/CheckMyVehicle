const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/revision', (req, res) => {
  const query = 'SELECT * FROM revision';

  mysqlConnection.query(query, (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
});

// Nueva revisión

router.post('/revision', (req, res) => {
  const { estado, vehiculoPlaca, empleadoId, fechaRevision, parteVehiculoId } = req.body;
  
  const query = 'INSERT INTO revision SET ?';

  mysqlConnection.query(query, { estado, vehiculoPlaca, empleadoId, fechaRevision }, (err, rows, fields) => {
    !err ? res.json({ Status: 'Revisión guardada', revisionId: rows.insertId }) : console.log(err);
  });
});


// Revisión pendiente

router.post('/revision/:id/parte', (req, res) => {
  const revisionId = req.params.id;
  const { fechaRevision, diagnostico, parteVehiculoId, tecnicoId } = req.body;

  const query = 'insert into revisionParteVehiculo set ?';

  mysqlConnection.query(query, { fechaRevision, diagnostico, revisionId, parteVehiculoId, tecnicoId }, (err, rows, fields) => {
    !err ? res.json({ Status: "Parte registrada", revisionParteId: rows.insertId }) : console.log(err);
  });
});

module.exports = router;