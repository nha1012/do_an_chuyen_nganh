
import express from 'express';
import productController from '../controllers/product.controller'
const authJwt = require("../middleware/authJWT");
let productRouter = express.Router();
productRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], productController.getAllProduct)
  // lay thong tin thong ke san pham
  .get('/thong-ke-san-pham', [authJwt.verifyToken, authJwt.isEmployee], productController.getDataThongKeSanPham)
  .delete('/:id', [authJwt.verifyToken, authJwt.isEmployee], productController.deleteProduct)
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], productController.createNewProduct)
  .put('/:id', [authJwt.verifyToken, authJwt.isEmployee], productController.updateProduct)
module.exports = productRouter;
