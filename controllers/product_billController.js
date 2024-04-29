const product_bill = require('../models').product_bill_model;
const bill = require('../models').bill_model;
const product = require('../models').product_model;


module.exports = {
    list(req, res) {
        return product_bill
            .findAll({})
            .then((product_bill) => res.status(200).send(product_bill))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return product_bill
            .findByPk(req.params.id)
            .then((product_bill) => {
                console.log(product_bill);
                if (!product_bill) {
                    return res.status(404).send({
                        message: 'product_bill Not Found',
                    });
                }
                return res.status(200).send(product_bill);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return product_bill
            .create({
                date: req.body.date,
                hour: req.body.hour,
                id_pro: req.body.id_pro,
                id_bill: req.body.id_bill,
            })
            .then((product_bill) => res.status(201).send(product_bill))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return product_bill
            .findByPk(req.params.id)
            .then(product_bill => {
                if (!product_bill) {
                    return res.status(404).send({
                        message: 'product_bill Not Found',
                    });
                }
                return product_bill
                    .update({
                        date: req.body.date || product_bill.date,
                        hour: req.body.hour || product_bill.hour,
                        id_pro: req.body.id_pro || product_bill.id_pro,
                        id_bill: req.body.hour || product_bill.hour,
                    })
                    .then(() => res.status(200).send(product_bill))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return product_bill
            .findByPk(req.params.id)
            .then(product_bill => {
                if (!product_bill) {
                    return res.status(400).send({
                        message: 'product_bill Not Found',
                    });
                }
                return product_bill
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return product_bill
            .findAll({
                attributes:['product_registration','date','hour'],
                include: [{
                    attributes:['id_bill','id_pay','amount','price_u','price_t'],
                    model: bill,
                },
                {
                    attributes:['idpro','name_pro','price'],
                    model: product,
                }
                ]
            })
            .then((product_bill) => res.status(200).send(product_bill))
            .catch((error) => { res.status(400).send(error); });
    },
};
