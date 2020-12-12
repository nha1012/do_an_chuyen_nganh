
import express from 'express';
import productController from '../controllers/product.controller'
const authJwt = require("../middleware/authJWT");
let productRouter = express.Router();
productRouter
  .get('/', authJwt.verifyToken, productController.getAllProduct)
  .delete('/:id', [authJwt.verifyToken], productController.deleteProduct)
  .post('/', [authJwt.verifyToken], productController.createNewProduct)
  .put('/:id', [authJwt.verifyToken], productController.updateProduct)
module.exports = productRouter;
