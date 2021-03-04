import express from 'express';
import userController from '../controllers/user.controller'
const authJwt = require("../middleware/authJWT");
let userRouter = express.Router();
userRouter
  .get('/customers-list', [authJwt.verifyToken, authJwt.isEmployee], userController.getCustomerList)
  .get('/chi-tiet/:id', [authJwt.verifyToken, authJwt.isEmployee], userController.getUserById)
  .get('/employee', [authJwt.verifyToken, authJwt.isAdmin], userController.getNhanVien)
  .get('/customers', [authJwt.verifyToken, authJwt.isEmployee], userController.getAllCustomer)
  .delete('/:id', [authJwt.verifyToken, authJwt.isEmployee], userController.deleteUser)
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], userController.createNewUser)
  .put('/:id', [authJwt.verifyToken, authJwt.isEmployee], userController.updateUser)
module.exports = userRouter;
