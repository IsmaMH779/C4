var dbConn = require('../../config/db.config');

var Fabricantes = function (fabricantes) {
    this.nombre = fabricantes.nombre;
};
Fabricantes.create = function (newfab, result) {
    dbConn.query("INSERT INTO fabricantes set ?", newfab, function (err, res) {
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
Fabricantes.findById = function (id, result) {
    dbConn.query("Select * from fabricantes where id = ? ", id, function (err,
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
Fabricantes.findAll = function (result) {
    dbConn.query("Select * from fabricantes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('fabricantes : ', res);
            result(null, res);
        }
    });
};
Fabricantes.update = function (id, fabricantes, result) {
    dbConn.query("UPDATE fabricantes SET nombre = ? WHERE id = ? ",
        [fabricantes.nombre, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Fabricantes.delete = function (id, result) {
    dbConn.query("DELETE FROM fabricantes WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Fabricantes;