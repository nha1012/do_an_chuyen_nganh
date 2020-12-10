'use strict';

var _user = require('../model/user.model');

var _user2 = _interopRequireDefault(_user);

var _auth = require('../config/auth.config');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// xua ly logic lay tat ca user
exports.login = function (req, res) {
  var userLogin = req.body;
  _user2.default.getUserLogin(userLogin).then(function (data) {
    if (!_lodash2.default.isEmpty(data)) {
      var token = _jsonwebtoken2.default.sign({ userID: userLogin.id }, _auth.secret, { expiresIn: 86400 }); // alive 24h
      return res.send({ token: token });
    }
    return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" });
  }).catch(function (err) {
    return res.status(500).json({ message: "Lỗi hệ thống!" });
  });
};