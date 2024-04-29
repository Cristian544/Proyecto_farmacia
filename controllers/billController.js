const bill = require('../models').bill_model;
const payment_method = require('../models').payment_method_model;
const user_bill = require('../models').user_bill_model;
const product_bill = require('../models').product_bill_model;


module.exports = {
    list(req, res) {
        return bill
            .findAll({})
            .then((bill) => res.status(200).send(bill))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return bill
            .findByPk(req.params.id)
            .then((bill) => {
                console.log(bill);
                if (!bill) {
                    return res.status(404).send({
                        message: 'bill Not Found',
                    });
                }
                return res.status(200).send(bill);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return bill
            .create({
                id_pro: req.body.id_pro,
                id_pay: req.body.id_pay,
                amount: req.body.amount,
                price_u: req.body.price_u,
                price_t: req.body.price_t
            })
            .then((bill) => res.status(201).send(bill))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return bill
            .findByPk(req.params.id)
            .then(bill => {
                if (!bill) {
                    return res.status(404).send({
                        message: 'bill Not Found',
                    });
                }
                return bill
                    .update({
                        id_pro: req.body.id_pro || bill.id_pro,
                        id_pay: req.body.id_pay || bill.id_pay,
                        amount: req.body.amount || bill.amount,
                        price_u: req.body.price_u || bill.price_u,
                        price_t: req.body.price_t || bill.price_t,
                    })
                    .then(() => res.status(200).send(bill))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return bill
            .findByPk(req.params.id)
            .then(bill => {
                if (!bill) {
                    return res.status(400).send({
                        message: 'bill Not Found',
                    });
                }
                return bill
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return bill
            .findAll({
                include: [{
                    attributes:['name_method'],
                    model: payment_method,
                },
                {
                    attributes:['sales_record','date','hour'],
                    model: user_bill
                }
                ]
            })
            .then((bill) => res.status(200).send(bill))
            .catch((error) => { res.status(400).send(error); });
    },
};
