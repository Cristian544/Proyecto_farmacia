var express = require('express');
var router = express.Router();
const product_billController = require('../controllers').product_billController;


router.get('/', product_billController.list);
router.get('/full', product_billController.listFull);
router.get('/:id', product_billController.getById);
router.post('/', product_billController.add);
router.put('/:id', product_billController.update);
router.delete('/:id', product_billController.delete);


module.exports = router;
