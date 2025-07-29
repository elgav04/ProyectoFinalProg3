const express = require('express');
const router = express.Router();
const empleadoscontroller = require('../controllers/empleados.controller');

router.get('/empleados', empleadoscontroller.list);
router.post('/empleados', empleadoscontroller.save);
router.delete('/empleados/:cempleados', empleadoscontroller.delete);
router.get('/empleados/:cempleados', empleadoscontroller.edit);
router.post('/empleados/:cempleados', empleadoscontroller.update);

module.exports = router;
