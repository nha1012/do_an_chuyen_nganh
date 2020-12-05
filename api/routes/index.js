import userRouter from './user.route';
import authRouter from './auth.route';
let router = (app) => {
  app.get("/", (req, res) => {
    res.json("Api quản lý giày design by: nha dev");
  });
  app.use('/user', userRouter);
  app.use('/auth', authRouter);
}
module.exports = router
