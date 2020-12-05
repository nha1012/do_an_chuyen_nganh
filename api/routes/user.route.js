import express from 'express';
let userRouter = express.Router();
userRouter.get('/', (req, res) => res.json([]));
module.exports = userRouter;
