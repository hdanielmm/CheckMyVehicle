const express = require('express');
const router = express.Router();

const VehiculoController = require('../controllers/vehiculo');

router.get('/vehiculo', VehiculoController.vehiculos_get_all);

router.get('/vehiculo/:vehiculoId', VehiculoController.vehiculos_get_vehiculo);

router.post('/vehiculo', VehiculoController.vehiculos_create_vehiculo);

router.delete('/vehiculo/:vehiculoId', VehiculoController.vehiculos_delete_vehiculo);

module.exports = router;