const mysqlConnection = require('../database');

exports.vehiculos_get_all = (req, res) => {
  mysqlConnection.query('SELECT * FROM vehiculo', (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
};

exports.vehiculos_get_vehiculo = (req, res) => {
  const placa = req.params.vehiculoId;

  mysqlConnection.query('SELECT * FROM vehiculo WHERE placa = ?', [placa], (err, rows, fields) => {
    !err ? res.json(rows[0]) : console.log(err)
  });
};

exports.vehiculos_create_vehiculo = (req, res) => {
  const { placa, marca, linea, modelo } = req.body;
  console.log("req.body", req.body);
  const query = 'INSERT INTO vehiculo SET ?';

  mysqlConnection.query(query, { placa, marca, linea, modelo }, (err, rows, fields) => {
    if (!err) {
      res.status(201).json({
        Status: 'Vehículo creado',
        vehiculo: {
          placa,
          marca,
          linea,
          modelo
        }
      });
    } else {
      console.log(err);
    }
  });
};

exports.vehiculos_delete_vehiculo = (req, res) => {
  const placa = req.params.vehiculoId;

  const query = 'DELETE FROM vehiculo WHERE placa = ?';

  mysqlConnection.query(query, [placa], (err, rows, fields) => {
    !err ? res.json({ Status: "Vehículo borrado", placa }) : console.log(err);
  });
};