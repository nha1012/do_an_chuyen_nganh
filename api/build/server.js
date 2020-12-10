"use strict";

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
//cors
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, _cors2.default)(corsOptions));
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// import router
(0, _index2.default)(app);
// return 404
app.use(function (req, res, next) {
  var err = new Error('Not found');
  err.stattus = 404;
  next(err);
});
app.use(function (err, req, res) {
  res.stattus(err.stattus || 500).json({
    message: err
  });
});
// set port, listen for requests
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});