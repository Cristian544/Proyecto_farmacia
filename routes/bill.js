var express = require('express');
var router = express.Router();
const billController = require('../controllers').billController;


router.get('/', billController.list);
router.get('/full', billController.listFull);
router.get('/:id', billController.getById);
router.post('/', billController.add);
router.put('/:id', billController.update);
router.delete('/:id', billController.delete);


module.exports = router;