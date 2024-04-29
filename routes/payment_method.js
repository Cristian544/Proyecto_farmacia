var express = require('express');
var router = express.Router();
const payment_methodController = require('../controllers').payment_methodController;


router.get('/', payment_methodController.list);
router.get('/full', payment_methodController.listFull);
router.get('/:id', payment_methodController.getById);
router.post('/', payment_methodController.add);
router.put('/:id', payment_methodController.update);
router.delete('/:id', payment_methodController.delete);


module.exports = router;
