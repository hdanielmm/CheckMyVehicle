const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sonartelematics',
    database: 'sonar',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB sonar is connected');
    }
});

module.exports = mysqlConnection;