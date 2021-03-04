import OrderModel from '../model/order.model';
exports.getThongTinMuaHang = (req, res, next) => {
  const userId = req.params.id
  OrderModel.getThongTinMuaHang(userId)
    .then(data => {
      return res.status(200).json({ thongTinMuaHang: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
