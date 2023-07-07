const Categorias = require('../models/categorias.model');
exports.findAll = function (req, res) {
    Categorias.findAll(function (err, categorias) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', categorias);
        res.send(categorias);
    });
};
exports.create = function (req, res) {
    const new_categorias = new Categorias(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: 'Please provide all required field'
        });
    } else {
        Categorias.create(new_categorias, function (err, categorias) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Categorias added successfully!", data: categorias });
        });
    }
};
exports.findById = function (req, res) {
    Categorias.findById(req.params.id, function (err, categorias) {
        if (err)
            res.send(err);
        res.json(categorias);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: 'Please provide all required field'
        });
    } else {
        Categorias.update(req.params.id, new Categorias(req.body), function (err, categorias) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Categorias.delete(req.params.id, function (err, categorias) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Categorias successfully deleted' });
    });
};