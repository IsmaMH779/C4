var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb0'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('conectado al server');
    var sql = "SELECT * FROM customers";
    con.query(sql, function (err, result) {

        if (err) throw err;
        console.log(result);
    });
})
