const express = require("express");
const bodyParser = require("body-parser");
const app = express();
import morgan from 'morgan';
import routes from './routes/index';
import cors from 'cors';
// parse requests of content-type: application/json
app.use(bodyParser.json());
//cors
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// import router
routes(app);
app.use(morgan('dev'));

// return 404
// app.use((req, res, next) => {
//   const err = new Error('Not found');
//   err.stattus = 404;
//   next(err)
// })
// app.use((err, req, res) => {
//   res.stattus(err.stattus || 500).json({
//     message: err
//   })
// })
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
