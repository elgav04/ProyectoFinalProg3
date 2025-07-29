const express = require('express');
const router = express.Router();
const transportistascontroller = require('../controllers/transportistas.controller');

router.get('/transportistas', transportistascontroller.list);
router.post('/transportistas', transportistascontroller.save);
router.delete('/transportistas/:ctransportistas', transportistascontroller.delete);
router.get('/transportistas/:ctransportistas', transportistascontroller.edit);
router.post('/transportistas/:ctransportistas', transportistascontroller.update);

module.exports = router;
