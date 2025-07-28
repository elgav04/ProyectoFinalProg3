const express = require('express');
const router = express.Router();
const tipoempleadoController = require('../controller/tipoempleadocontroller');

router.get('/', tipoempleadoController.list);
router.post('/', tipoempleadoController.save);
router.delete('/:ctipoemp', tipoempleadoController.delete);
router.get('/:ctipoemp', tipoempleadoController.edit);
router.post('/:ctipoemp', tipoempleadoController.update);

module.exports = router;