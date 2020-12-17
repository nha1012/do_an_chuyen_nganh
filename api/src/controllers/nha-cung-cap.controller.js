

import NhaCungCapModel from '../model/nha-cung-cap.model';
// exports.createTable = (req, res) => {
//   NhaCungCapModel.createTable()
//     .then(data => {
//       return res.status(200).json({ message: "thanh cong" })
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).json({ message: "Lỗi hệ thống!" })
//     })
// }
// exports.getWorkShiftByIdUser = (req, res) => {
//   NhaCungCapModel.getWorkShiftByIdUser(req.userId)
//     .then(data => {
//       return res.status(200).json({ allProductType: data })
//     })
//     .catch(err => {
//       return res.status(500).json({ message: "Lỗi hệ thống!" })
//     })
// }
// xua ly logic lay tat ca product type
exports.getAllNhaCungCap = (req, res) => {
  NhaCungCapModel.getAllNhaCungCap()
    .then(data => {
      return res.status(200).json({ allNhaCungCap: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xoa user
exports.deleteNhaCungCap = async (req, res) => {
  const nhaCungCapId = req.params.id
  NhaCungCapModel.deleteNhaCungCap(nhaCungCapId)
    .then(data => {
      return res.status(200).json({ message: 'Xóa thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Bạn không thể xóa vì các sản phẩm đang dùng loại này" })
    })
}
// sua user
exports.updateNhaCungCap = async (req, res) => {
  const nhaCungCapId = req.params.id
  const nhaCungCap = req.body;
  NhaCungCapModel.updateNhaCungCap(nhaCungCapId, nhaCungCap)
    .then(data => {
      return res.status(200).json({ message: 'Sửa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống" })
    })
}
//tao moi user
exports.createNewNhaCungCap = (req, res) => {
  const nhaCungCap = req.body;
  NhaCungCapModel.createNewNhaCungCap(nhaCungCap)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
