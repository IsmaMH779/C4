const mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb0'
});

connection.connect((error) => {
    if (error) {
        console.error('Conexion error: ' + error.stack);
        return;
    }
    console.log('connected');
});

module.exports = connection;