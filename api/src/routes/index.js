import userRouter from './user.route';
import authRouter from './auth.route';
import productRouter from './product.route';
import productTypeRouter from './product_type.route';
import workShiftRouter from './work_shift.route';
import nhaCungCapRouter from './nha-cung-cap.route';
let router = (app) => {
  app.use('/user', userRouter);
  app.get("/", (req, res) => {
    res.json("Api quản lý giày design by: nha dev");
  });
  app.use('/auth', authRouter);
  app.use('/product', productRouter);
  app.use('/product-type', productTypeRouter);
  app.use('/work-shift', workShiftRouter);
  app.use('/nha-cung-cap', nhaCungCapRouter);
}
module.exports = router
