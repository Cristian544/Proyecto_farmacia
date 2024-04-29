const category = require('../models').category_model;
const product = require('../models').product_model;

module.exports = {
    list(req, res) {
        return category
            .findAll({})
            .then((category) => res.status(200).send(category))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return category
            .findByPk(req.params.id)
            .then((category) => {
                console.log(category);
                if (!category) {
                    return res.status(404).send({
                        message: 'category Not Found',
                    });
                }
                return res.status(200).send(category);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return category
            .create({
                name_category: req.body.name_category,
            })
            .then((category) => res.status(201).send(category))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return category
            .findByPk(req.params.id)
            .then(category => {
                if (!category) {
                    return res.status(404).send({
                        message: 'category Not Found',
                    });
                }
                return category
                    .update({
                        name_category: req.body.name_category || category.name_category,
                    })
                    .then(() => res.status(200).send(category))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return category
            .findByPk(req.params.id)
            .then(category => {
                if (!category) {
                    return res.status(400).send({
                        message: 'category Not Found',
                    });
                }
                return category
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    listFull(req, res) {
        return category
            .findAll({
                include: [{
                        attributes: ['idpro', 'name_pro','price'],
                    model: product,
                },
                ]
            })
            .then((category) => res.status(200).send(category))
            .catch((error) => { res.status(400).send(error); });
    },
};
