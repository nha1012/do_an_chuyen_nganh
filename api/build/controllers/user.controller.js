"use strict";

var _user = require("../model/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// xua ly logic lay tat ca user
exports.getAllUser = function (req, res) {
  _user2.default.getAllUser().then(function (data) {
    return res.status(200).json({ allUser: data });
  }).catch(function (err) {
    return res.status(500).json({ message: "Lỗi hệ thống!" });
  });
};