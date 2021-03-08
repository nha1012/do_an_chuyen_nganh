import express from 'express';
import khuyenMaiController from '../controllers/khuyen-mai.controller'
const authJwt = require("../middleware/authJWT");
let khuyenMaiRouter = express.Router();
khuyenMaiRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], khuyenMaiController.getAllKhuyenMai)
module.exports = khuyenMaiRouter;
