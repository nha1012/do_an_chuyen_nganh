
import express from 'express';
import productTypeController from '../controllers/product_type.controller'
const authJwt = require("../middleware/authJWT");
let productTypeRouter = express.Router();
productTypeRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], productTypeController.getAllProductType)
  .delete('/:id', [authJwt.verifyToken, authJwt.isEmployee], productTypeController.deleteProductType)
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], productTypeController.createNewProductType)
  .put('/:id', [authJwt.verifyToken, authJwt.isEmployee], productTypeController.updateProductType)
module.exports = productTypeRouter;
