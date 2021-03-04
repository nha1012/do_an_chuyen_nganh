'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user.controller');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authJwt = require("../middleware/authJWT");
var userRouter = _express2.default.Router();
userRouter.get('/', authJwt.verifyToken, authJwt.isAdmin, _user2.default.getAllUser);
module.exports = userRouter;