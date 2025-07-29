const express = require('express');
const router = express.Router();
const brokersController = require('../controller/brokerscontroller');

router.get('/', brokersController.list);
router.post('/', brokersController.save);
router.delete('/:cbroker', brokersController.delete);
router.get('/:cbroker', brokersController.edit);
router.post('/:cbroker', brokersController.update);

module.exports = router;

