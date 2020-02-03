const mysqlConnection = require('../database');

exports.revisiones_get_all = (req, res) => {
  const query = 'SELECT * FROM revision';

  mysqlConnection.query(query, (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
};

exports.revisiones_create_revision = (req, res) => {
  const { estado, vehiculoPlaca, empleadoId, fechaRevision, parteVehiculoId } = req.body;

  const query = 'INSERT INTO revision SET ?';

  mysqlConnection.query(query, { estado, vehiculoPlaca, empleadoId, fechaRevision }, (err, rows, fields) => {
    !err ? res.json({ Status: 'Revisión guardada', revisionId: rows.insertId }) : console.log(err);
  });
}

exports.revisiones_create_revisionParteVehiculo = (req, res) => {
  const revisionId = req.params.id;
  
  const { fechaRevision, diagnostico, parteVehiculoId, tecnicoId } = req.body;

  const query = 'insert into revisionParteVehiculo set ?';

  mysqlConnection.query(query, { fechaRevision, diagnostico, revisionId, parteVehiculoId, tecnicoId }, (err, rows, fields) => {
    !err ? res.json({ Status: "Parte registrada", revisionParteId: rows.insertId }) : console.log(err);
  });
}