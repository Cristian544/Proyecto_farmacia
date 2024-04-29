var express = require('express');
const { payment_methodController } = require('../controllers');
var router = express.Router();
const categoryController = require('../controllers').categoryController;


router.get('/', categoryController.list);
router.get('/full', categoryController.listFull);
router.get('/:id', categoryController.getById);
router.post('/', categoryController.add);
router.put('/:id', categoryController.update);
router.delete('/:id', payment_methodController.delete);


module.exports = router;
