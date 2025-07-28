const express = require('express');
const router = express.Router();
const empresasController = require('../controller/empresascontroller');

router.get('/', empresasController.list);
router.post('/', empresasController.save);
router.delete('/:cempresa', empresasController.delete);
router.get('/:cempresa', empresasController.edit);
router.post('/:cempresa', empresasController.update);

module.exports = router;