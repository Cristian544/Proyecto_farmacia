const payment_method = require('../models').payment_method_model;
const bill = require('../models').bill_model;

module.exports = {
    list(req, res) {
        return payment_method
            .findAll({})
            .then((payment_method) => res.status(200).send(payment_method))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return payment_method
            .findByPk(req.params.id)
            .then((payment_method) => {
                console.log(payment_method);
                if (!payment_method) {
                    return res.status(404).send({
                        message: 'payment_method Not Found',
                    });
                }
                return res.status(200).send(payment_method);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return payment_method
            .create({
                name_method: req.body.name_method,
            })
            .then((payment_method) => res.status(201).send(payment_method))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return payment_method
            .findByPk(req.params.id)
            .then(payment_method => {
                if (!payment_method) {
                    return res.status(404).send({
                        message: 'payment_method Not Found',
                    });
                }
                return payment_method
                    .update({
                        name_method: req.body.name_method || payment_method.name_method,
                    })
                    .then(() => res.status(200).send(payment_method))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return payment_method
            .findByPk(req.params.id)
            .then(payment_method => {
                if (!payment_method) {
                    return res.status(400).send({
                        message: 'payment_method Not Found',
                    });
                }
                return payment_method
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return payment_method
            .findAll({
                include: [{
                    model: bill
                }]
            })
            .then((payment_method) => res.status(200).send(payment_method))
            .catch((error) => { res.status(400).send(error); });
    },
};
