
import express from 'express';
import productTypeController from '../controllers/product_type.controller'
const authJwt = require("../middleware/authJWT");
let productTypeRouter = express.Router();
productTypeRouter
  .get('/', authJwt.verifyToken, productTypeController.getAllProductType)
  .delete('/:id', [authJwt.verifyToken], productTypeController.deleteProductType)
  .post('/', [authJwt.verifyToken], productTypeController.createNewProductType)
  .put('/:id', [authJwt.verifyToken], productTypeController.updateProductType)
module.exports = productTypeRouter;
