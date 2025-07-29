const express = require('express');
const router = express.Router();
const paisesController = require('../controller/paisescontroller');

router.get('/', paisesController.list);
router.post('/', paisesController.save);
router.delete('/:cpais', paisesController.delete);
router.get('/:cpais', paisesController.edit);
router.post('/:cpais', paisesController.update);

module.exports = router;
