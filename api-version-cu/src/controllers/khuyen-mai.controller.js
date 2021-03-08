
import KhuyenMaiModel from '../model/khuyen-mai.model';
exports.getAllKhuyenMai = (req, res) => {
  KhuyenMaiModel.getAllKhuyenMai()
    .then(data => {
      return res.status(200).json({ khuyenMais: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xoa user
exports.deleteNhaCungCap = async (req, res) => {
  const nhaCungCapId = req.params.id
  KhuyenMaiModel.then(data => {
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
  KhuyenMaiModel.updateNhaCungCap(nhaCungCapId, nhaCungCap)
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
  KhuyenMaiModel.createNewNhaCungCap(nhaCungCap)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
