const mysql = require('mysql');

const connectionInfo = {
    host: 'localhost',
    user: 'ohgiraffers',
    password: 'ohgiraffers',
    database: 'menu', 
    port: 3306
};

const connection = mysql.createConnection(connectionInfo);
connection.connect();

const query = 'SELECT * FROM TBL_MENU';

connection.query(query, (err, results, fields) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
});

connection.end();