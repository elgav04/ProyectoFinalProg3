const express = require('express');
const router = express.Router();
const brokerscontroller = require('../controllers/brokers.controller');

router.get('/brokers', brokerscontroller.list);
router.post('/brokers', brokerscontroller.save);
router.delete('/brokers/:cbrokers', brokerscontroller.delete);
router.get('/brokers/:cbrokers', brokerscontroller.edit);
router.post('/brokers/:cbrokers', brokerscontroller.update);

module.exports = router;

