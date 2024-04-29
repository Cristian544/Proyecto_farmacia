var express = require('express');
var router = express.Router();
const productController = require('../controllers').productController;


router.get('/', productController.list);
router.get('/full', productController.listFull);
router.get('/:id', productController.getById);
router.post('/', productController.add);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);


module.exports = router;
