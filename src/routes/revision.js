const express = require('express');
const router = express.Router();

const RevisionController = require('../controllers/revision');

router.get('/revision', RevisionController.revisiones_get_all);

// Nueva revisión

router.post('/revision', RevisionController.revisiones_create_revision);

// Revisión pendiente

router.post('/revision/:id/parte', RevisionController.revisiones_create_revisionParteVehiculo);

module.exports = router;