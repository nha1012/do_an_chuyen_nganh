const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./model/db")
const app = express();
import routes from './routes/index'
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// import router
routes(app);
// return 404
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.stattus = 404;
  next(err)
})
app.use((err, req, res) => {
  res.stattus(err.stattus || 500).json({
    message: err
  })
})
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
