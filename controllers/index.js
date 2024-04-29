const categoryController = require('./categoryController');
const payment_methodController = require('./payment_methodController');
const productController = require('./productController');
const product_billController = require('./product_billController');
const billController = require('./billController');
const user_billController = require('./user_billController');
const usersController = require('./usersController');

module.exports = {
    billController,
    categoryController,
    payment_methodController,
    product_billController,
    productController,
    user_billController,
    usersController

};
