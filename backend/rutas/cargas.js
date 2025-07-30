const express = require('express');
const router = express.Router();
const cargasController = require('../controller/cargascontroller');

router.get('/', cargasController.list);
router.post('/', cargasController.save);
router.delete('/:ccarga', cargasController.delete);
router.get('/:ccarga', cargasController.edit);
router.post('/:ccarga', cargasController.update);

module.exports = router;
