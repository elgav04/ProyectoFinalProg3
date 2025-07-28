const express = require('express');
const router = express.Router();
const tipovehiculosController = require('../controller/tipovehiculoscontroller');

router.get('/', tipovehiculosController.list);
router.post('/', tipovehiculosController.save);
router.delete('/:ctipov', tipovehiculosController.delete);
router.get('/:ctipov', tipovehiculosController.edit);
router.post('/:ctipov', tipovehiculosController.update);

module.exports = router;