const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ejerciciosmysql'
});
dbConn.connect((err) => {
    if (err) throw err;
    console.log("Database connected")
});

module.exports = dbConn;