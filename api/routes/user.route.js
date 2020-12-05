import express from 'express';
import userController from '../controllers/user.controller'
let userRouter = express.Router();
userRouter.get('/', userController.getAllUser);
module.exports = userRouter;
