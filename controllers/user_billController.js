const user_bill = require('../models').user_bill_model;
const bill = require('../models').bill_model;
const users = require('../models').users_model;

module.exports = {
    list(req, res) {
        return user_bill
            .findAll({})
            .then((user_bill) => res.status(200).send(user_bill))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return user_bill
            .findByPk(req.params.id)
            .then((user_bill) => {
                console.log(user_bill);
                if (!user_bill) {
                    return res.status(404).send({
                        message: 'user_bill Not Found',
                    });
                }
                return res.status(200).send(user_bill);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return user_bill
            .create({
                date: req.body.date,
                hour: req.body.hour,
                id_user: req.body.id_user,
                id_bill: req.body.id_bill,
            })
            .then((user_bill) => res.status(201).send(user_bill))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return user_bill
            .findByPk(req.params.id)
            .then(user_bill => {
                if (!user_bill) {
                    return res.status(404).send({
                        message: 'user_bill Not Found',
                    });
                }
                return user_bill
                    .update({
                        date: req.body.date || user_bill.date,
                        hour: req.body.hour || user_bill.hour,
                        id_user: req.body.id_user || user_bill.id_user,
                        id_bill: req.body.id_bill || user_bill.id_bill,
                    })
                    .then(() => res.status(200).send(user_bill))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return user_bill
            .findByPk(req.params.id)
            .then(user_bill => {
                if (!user_bill) {
                    return res.status(400).send({
                        message: 'user_bill Not Found',
                    });
                }
                return user_bill
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return user_bill
            .findAll({
                attributes:['sales_record','date','hour'],
                include: [{
                    attributes:['id_pay','price_u','price_t'],
                    model: bill,
                },
                {
                    attributes:['name_last_name','phone'],
                    model: users
                }
                ]
            })
            .then((user_bill) => res.status(200).send(user_bill))
            .catch((error) => { res.status(400).send(error); });
    },
};