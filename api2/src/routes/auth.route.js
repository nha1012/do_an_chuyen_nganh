import express from 'express';
import authController from '../controllers/auth.controller'
let authRouter = express.Router();
authRouter.post('/login', authController.login);
authRouter.post('/register', (req, res) => res.send({}));
module.exports = authRouter;
