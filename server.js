const mysql = require('mysql');

const connection = mysql.createConnection({
    //host:'flexdecks.gametrainlearning.org',
    host: 'localhost',
    //port: 3306,
    database:'gametrai_flexdecks',
    user: 'gametrai_megan',
    password:'play2learn',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields){
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();
