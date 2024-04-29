var express = require('express');
var router = express.Router();
const user_billController = require('../controllers').user_billController;


router.get('/', user_billController.list);
router.get('/full', user_billController.listFull);
router.get('/:id', user_billController.getById);
router.post('/', user_billController.add);
router.put('/:id', user_billController.update);
router.delete('/:id', user_billController.delete);


module.exports = router;
