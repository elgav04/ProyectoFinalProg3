const express = require('express');
const router = express.Router();
const warehousesController = require('../controller/warehousescontroller');

router.get('/', warehousesController.list);
router.post('/', warehousesController.save);
router.get('/:cwarehouse', warehousesController.edit);
router.post('/:cwarehouse', warehousesController.update);
router.delete('/:cwarehouse', warehousesController.delete);

module.exports = router;
