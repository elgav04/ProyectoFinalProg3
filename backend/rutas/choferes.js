const express = require('express');
const router = express.Router();
const choferescontroller = require('../controllers/choferes.controller');

router.get('/choferes', choferescontroller.list);
router.post('/choferes', choferescontroller.save);
router.delete('/choferes/:cchofere', choferescontroller.delete);
router.get('/choferes/:cchofere', choferescontroller.edit);
router.post('/choferes/:cchofere', choferescontroller.update);

module.exports = router;
