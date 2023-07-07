const Productos = require('../models/productos.model');
exports.findAll = function (req, res) {
    Productos.findAll(function (err, productos) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', productos);
        res.send(productos);
    });
};
exports.create = function (req, res) {
    const new_Productos = new Productos(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: 'Please provide all required field'
        });
    } else {
        Productos.create(new_Productos, function (err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Productos added successfully!", data: productos });
        });
    }
};
exports.findById = function (req, res) {
    Productos.findById(req.params.id, function (err, productos) {
        if (err)
            res.send(err);
        res.json(productos);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: 'Please provide all required field'
        });
    } else {
        Productos.update(req.params.id, new Productos(req.body), function (err, productos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Productos successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Productos.delete(req.params.id, function (err, productos) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Productos successfully deleted' });
    });
};