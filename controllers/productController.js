const product = require('../models').product_model;
const product_bill = require('../models').product_bill_model;
const category = require('../models').category_model;


module.exports = {
    list(req, res) {
        return product
            .findAll({})
            .then((product) => res.status(200).send(product))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return product
            .findByPk(req.params.id)
            .then((product) => {
                console.log(product);
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return product
            .create({
                name_pro: req.body.name_pro,
                price: req.body.price,
                amount: req.body.amount,
                category: req.body.category,
                stock: req.body.stock
            })
            .then((product) => res.status(201).send(product))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .update({
                        name_pro: req.body.name_pro || product.name_pro,
                        price: req.body.price || product.price,
                        amount: req.body.amount || product.amount,
                        category: req.body.category || product.category,
                        stock: req.body.stock || product.stock,
                    })
                    .then(() => res.status(200).send(product))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    listFull(req, res) {
        return product
            .findAll({
                include: [{
                    attributes: ['product_registration','date', 'hour'],
                    model: product_bill,
                },
                {
                    attributes: ['name_category'],
                    model: category,
                }
                ]
            })
            .then((product) => res.status(200).send(product))
            .catch((error) => { res.status(400).send(error); });
    },

};
