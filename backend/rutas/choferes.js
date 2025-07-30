const express = require('express');
const router = express.Router();
const choferesController = require('../controller/choferescontroller');

router.get('/', choferesController.list);
router.post('/', choferesController.save);
router.delete('/:cchofer', choferesController.delete);
router.get('/:cchofer', choferesController.edit);
router.post('/:cchofer', choferesController.update);

module.exports = router;
