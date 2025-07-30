const express = require('express');
const router = express.Router();
const empleadosController = require('../controller/empleadoscontroller');

router.get('/', empleadosController.list);
router.post('/', empleadosController.save);
router.delete('/:cempleado', empleadosController.delete);
router.get('/:cempleado', empleadosController.edit);
router.post('/:cempleado', empleadosController.update);

module.exports = router;

