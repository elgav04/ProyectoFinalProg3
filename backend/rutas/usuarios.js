const express = require('express');
const router = express.Router();
const usuarioscontroller = require('../controllers/usuarios.controller');

router.get('/usuarios', usuarioscontroller.list);
router.post('/usuarios', usuarioscontroller.save);
router.delete('/usuarios/:cusuarios', usuarioscontroller.delete);
router.get('/usuarios/:cusuarios', usuarioscontroller.edit);
router.post('/usuarios/:cusuarios', usuarioscontroller.update);

module.exports = router;
