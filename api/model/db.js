const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  port: dbConfig.PORT,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  charset: dbConfig.CHASET
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

connection.end(function (err) {
  if (err) throw err;
  console.log("Closed!");
});
module.exports = connection;
