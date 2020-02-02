const mysqlConnection = require('../database');

exports.vehiculos_get_all = (req, res) => {
  mysqlConnection.query('SELECT * FROM vehiculo', (err, rows, fields) => {
    !err ? res.json(rows) : console.log(err);
  });
};