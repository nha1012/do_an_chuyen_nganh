'use strict';

var _user = require('./user.route');

var _user2 = _interopRequireDefault(_user);

var _auth = require('./auth.route');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
  app.get("/", function (req, res) {
    res.json("Api quản lý giày design by: nha dev");
  });
  app.use('/user', _user2.default);
  app.use('/auth', _auth2.default);
};
module.exports = router;