const express = require('express');
const router = express.Router();
const paisescontroller = require('../controllers/paises.controller');

router.get('/paises', paisescontroller.list);
router.post('/paises', paisescontroller.save);
router.delete('/paises/:cpaise', paisescontroller.delete);
router.get('/paises/:cpaise', paisescontroller.edit);
router.post('/paises/:cpaise', paisescontroller.update);

module.exports = router;
