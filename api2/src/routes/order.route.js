
import express from 'express';
import orderController from '../controllers/order.controller'
const authJwt = require("../middleware/authJWT");
let orderRouter = express.Router();
orderRouter
  .get('/san-pham-da-mua/:id', [authJwt.verifyToken, authJwt.isEmployee], orderController.getThongTinMuaHang)
module.exports = orderRouter;
