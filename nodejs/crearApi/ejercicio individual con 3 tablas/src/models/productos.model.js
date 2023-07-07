var dbConn = require('../../config/db.config');

var Productos = function (productos) {
    this.nombre = productos.nombre;
    this.categoria = productos.categoria;
    this.precio = productos.precio;
    this.stock = productos.stock;
    this.fabricante = productos.fabricante;
};
Productos.create = function (newProd, result) {
    dbConn.query("INSERT INTO productos set ?", newProd, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Productos.findById = function (id, result) {
    dbConn.query("Select * from productos where id = ? ", id, function (err,
        res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Productos.findAll = function (result) {
    dbConn.query("Select * from productos", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('productos : ', res);
            result(null, res);
        }
    });
};
Productos.update = function (id, productos, result) {
    dbConn.query("UPDATE productos SET nombre = ?, categoria = ?, precio = ?,stock = ?, fabricante = ? WHERE id = ? ",
        [productos.nombre, productos.categoria, productos.precio, productos.stock, productos.fabricante, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Productos.delete = function (id, result) {
    dbConn.query("DELETE FROM productos WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Productos;