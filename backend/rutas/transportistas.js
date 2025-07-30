const express = require('express');
const router = express.Router();
const transportistasController = require('../controller/transportistascontroller');

router.get('/', transportistasController.list);
router.post('/', transportistasController.save);
router.delete('/:ctransportista', transportistasController.delete);
router.get('/:ctransportista', transportistasController.edit);
router.post('/:ctransportista', transportistasController.update);

module.exports = router;
