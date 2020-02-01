const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/vehicle', (req, res) => {
  mysqlConnection.query('SELECT * FROM vehicle', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/vehicle/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM vehicle WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.post('/vehicle', (req, res) => {
  const { license_plate, brand, line, model } = req.body;
  
  const query = 'INSERT INTO vehicle SET ?';

  mysqlConnection.query(query, { license_plate, brand, line, model }, (err, rows, fields) => {
    if (!err) {
      console.log('insertId', rows.insertId);
      res.json({ Status: 'Saved vehicle' });
    } else {
      console.log(err);
    }
  });
});

// router.post('/vehicle', (req, res) => {
//   const { id, license_plate, brand, line, model } = req.body;
//   console.log(req.body);
//   const query = `
//     SET @id = ?;
//     SET @license_plate = ?;
//     SET @brand = ?;
//     SET @line = ?;
//     SET @model = ?;
//     CALL vehicleAddOrEdit(@id, @license_plate, @brand, @line, @model);
//   `;
//   mysqlConnection.query(query, [id, license_plate, brand, line, model], (err, rows, fields) => {
//     if (!err) {
//       res.json({ Status: 'Saved vehicle' });
//     } else {
//       console.log(err);
//     }
//   });
// });

// router.put('/vehicle/:id', (req, res) => {
//   const { license_plate, brand, line, model } = req.body;
//   console.log("postman",req.body);
//   const { id } = req.params;
//   const query = 'CALL vehicleAddOrEdit(?, ?, ?, ?, ?)';

//   mysqlConnection.query(query, [id, license_plate, brand, line, model], (err, rows, fields) => {
//     if (!err) {
//       res.json({ Status: 'Updated vehicle' });
//     } else {
//       console.log(err);
//     }
//   });
// });

router.delete('/vehicle/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM vehicle WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({Status: "Deleted vehicle"});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;