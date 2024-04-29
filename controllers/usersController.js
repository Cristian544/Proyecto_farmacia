const users = require('../models').users_model;
const user_bill = require('../models').user_bill_model;

module.exports = {
    list(req, res) {
        return users
            .findAll({})
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return users
            .findByPk(req.params.id)
            .then((users) => {
                console.log(users);
                if (!users) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return res.status(200).send(users);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return users
            .create({
                identification_card: req.body.identification_card,
                name_last_name: req.body.name_last_name,
                phone: req.body.phone,
                mail: req.body.mail,
                addres: req.body.addres,
                age: req.body.age
            })
            .then((users) => res.status(201).send(users))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return users
            .findByPk(req.params.id)
            .then(users => {
                if (!users) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return users
                    .update({
                        identification_card: req.body.identification_card || users.identification_card,
                        name_last_name: req.body.name_last_name || users.name_last_name,
                        phone: req.body.phone || users.phone,
                        mail: req.body.mail || users.mail,
                        address: req.body.address || users.address,
                        age: req.body.age || users.age
                        
                    })
                    .then(() => res.status(200).send(users))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return users
            .findByPk(req.params.id)
            .then(users => {
                if (!users) {
                    return res.status(400).send({
                        message: 'users Not Found',
                    });
                }
                return users
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return users
            .findAll({
                include: [{
                    attributes:['sales_record','date','hour','id_bill'],
                    model: user_bill,
                }
                ]
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
    },
};
