var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port     : '3306',
    user:"gametrai_josh",
    password:'play2learn',
    database : "gametrai_flexdecks"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Node connected to mysql server!");
  });