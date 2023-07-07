var dbConn = require('../../config/db.config');

var Categorias = function (Categorias) {
    this.nombre = Categorias.nombre;
};
Categorias.create = function (newCat, result) {
    dbConn.query("INSERT INTO categorias set ?", newCat, function (err, res) {
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
Categorias.findById = function (id, result) {
    dbConn.query("Select * from categorias where id = ? ", id, function (err,
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
Categorias.findAll = function (result) {
    dbConn.query("Select * from categorias", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('categorias : ', res);
            result(null, res);
        }
    });
};
Categorias.update = function (id, categorias, result) {
    dbConn.query("UPDATE categorias SET nombre = ? WHERE id = ? ",
        [categorias.nombre, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Categorias.delete = function (id, result) {
    dbConn.query("DELETE FROM categorias WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Categorias;