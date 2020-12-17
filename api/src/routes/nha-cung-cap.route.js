import express from 'express';
import nhaCungCapController from '../controllers/nha-cung-cap.controller'
const authJwt = require("../middleware/authJWT");
let nhaCungCapRouter = express.Router();
nhaCungCapRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], nhaCungCapController.getAllNhaCungCap)
  .delete('/:id', [authJwt.verifyToken, authJwt.isEmployee], nhaCungCapController.deleteNhaCungCap)
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], nhaCungCapController.createNewNhaCungCap)
  .put('/:id', [authJwt.verifyToken, authJwt.isEmployee], nhaCungCapController.updateNhaCungCap)
module.exports = nhaCungCapRouter;
