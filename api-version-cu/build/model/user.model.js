"use strict";

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get all user
exports.getAllUser = function () {
  var query = "SELECT id_user, user_name, full_name, permmision, email FROM user";
  return new Promise(function (resolve, reject) {
    try {
      _db2.default.query(query, "", function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    } catch (error) {
      if (error) reject(error);
    }
  });
};
// get user
exports.getUserLogin = function (user) {
  var query = "SELECT id_user, user_name, full_name, permmision, email FROM user WHERE user_name = '" + user.userName + "' and password = '" + user.password + "'";
  return new Promise(function (resolve, reject) {
    try {
      _db2.default.query(query, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    } catch (error) {
      if (error) reject(error);
    }
  });
};
// get user by id
exports.getUserById = function (userId) {
  var query = "SELECT id_user, user_name, full_name, permmision, email FROM user WHERE id_user = '" + userId + "'";
  return new Promise(function (resolve, reject) {
    try {
      _db2.default.query(query, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    } catch (error) {
      if (error) reject(error);
    }
  });
};