const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarioscontroller');

router.get('/', usuariosController.list);
router.post('/', usuariosController.save);
router.delete('/:cusuario', usuariosController.delete);
router.get('/:cusuario', usuariosController.edit);
router.post('/:cusuario', usuariosController.update);

module.exports = router;
