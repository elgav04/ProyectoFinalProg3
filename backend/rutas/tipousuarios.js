const express = require('express');
const router = express.Router();
const tipousuariosController = require('../controller/tipousuarioscontroller');

router.get('/', tipousuariosController.list);
router.post('/', tipousuariosController.save);
router.delete('/:ctipousuario', tipousuariosController.delete);
router.get('/:ctipousuario', tipousuariosController.edit);
router.post('/:ctipousuario', tipousuariosController.update);

module.exports = router;