const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const authController = require('../controller/authcontroller');

router.post('/login', authController.login);
router.post('/logout', verificarToken, authController.logout);

module.exports = router;