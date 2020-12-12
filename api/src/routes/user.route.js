import express from 'express';
import userController from '../controllers/user.controller'
const authJwt = require("../middleware/authJWT");
let userRouter = express.Router();
userRouter.get('/', [authJwt.verifyToken, authJwt.isAdmin], userController.getAllUser)
userRouter.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteUser)
module.exports = userRouter;
