import express from 'express';
import userController from '../controllers/user.controller'
const authJwt = require("../middleware/authJWT");
let userRouter = express.Router();
userRouter.get('/', [authJwt.verifyToken, authJwt.isAdmin], userController.getAllUser)
.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteUser)
.post('/', [authJwt.verifyToken, authJwt.isAdmin], userController.createNewUser)
.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.updateUser)
module.exports = userRouter;
