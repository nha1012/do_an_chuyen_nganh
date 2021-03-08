"use strict";

var _jsonwebtoken = require("jsonwebtoken");

var _authConfig = require("../config/auth.config.js");

var _user = require("../model/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers["access-token"];
  console.log('called');
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  (0, _jsonwebtoken.verify)(token, _authConfig.secret, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

var isAdmin = function isAdmin(req, res, next) {
  _user2.default.getUserById(req.userId).exec(function (err, user) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user.permmison === "admin") {
      next();
      return;
    }
    res.status(403).send({ message: "Require Admin Role!" });
    return;
  });
};

module.exports = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};