const mysqlConnection = require('../database');

exports.vehiculos_get_all = (req, res) => {
  mysqlConnection.query('SELECT * FROM vehiculo', (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
};

exports.vehiculos_get_vehiculo = (req, res) => {
  const placa = req.params.vehiculoId;

  const query = 'select r.vehiculoPlaca as placa, e.nombre as empleado, rpv.diagnostico, pv.nombre as parte ' +
    'from revision r ' +
    'inner join revisionParteVehiculo rpv on r.id = rpv.revisionId ' +
    'inner join empleado e on e.id = rpv.tecnicoId ' +
    'inner join parteVehiculo pv on rpv.parteVehiculoId = pv.id ' +
    'where r.vehiculoPlaca = ?';

  mysqlConnection.query(query, [placa], (err, rows, fields) => {
    console.log(rows);
    !err ? res.status(200).json(rows) : console.log(err);
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