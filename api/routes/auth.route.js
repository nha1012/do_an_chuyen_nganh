import express from 'express';
let authRouter = express.Router();
authRouter.get('/login', (req, res) => res.send({}));
authRouter.get('/register', (req, res) => res.send({}));
module.exports = authRouter;
