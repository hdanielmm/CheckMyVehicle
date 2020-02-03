const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/index');

router.get('/', IndexController.index_get_all);

module.exports = router;