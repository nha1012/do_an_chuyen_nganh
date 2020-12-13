import userRouter from './user.route';
import authRouter from './auth.route';
import productRouter from './product.route';
import productTypeRouter from './product_type.route';
let router = (app) => {
  app.use('/user', userRouter);
  app.get("/", (req, res) => {
    res.json("Api quản lý giày design by: nha dev");
  });
  app.use('/auth', authRouter);
  app.use('/product', productRouter);
  app.use('/product-type', productTypeRouter);
}
module.exports = router
