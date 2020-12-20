import express from 'express';
import transactionController from '../controllers/transaction.controller'
const authJwt = require("../middleware/authJWT");
let workShiftRouter = express.Router();
workShiftRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], transactionController.getAllTransaction)
module.exports = workShiftRouter;
