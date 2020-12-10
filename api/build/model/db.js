"use strict";

var mysql = require("mysql");
var dbConfig = require("../config/db.config.js");

// Create a connection to the database
var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  port: dbConfig.PORT,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  charset: dbConfig.CHASET
});

// open the MySQL connection
connection.connect(function (error) {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;