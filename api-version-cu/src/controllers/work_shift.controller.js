

import WorkShiftModel from '../model/work_shift.model';
exports.createTable = (req, res) => {
  WorkShiftModel.createTable()
    .then(data => {
      return res.status(200).json({ message: "thanh cong" })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
exports.getWorkShiftByIdUser = (req, res) => {
  WorkShiftModel.getWorkShiftByIdUser(req.userId)
    .then(data => {
      return res.status(200).json({ allProductType: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// xua ly logic lay tat ca product type
exports.getAllWorkShift = (req, res) => {
  WorkShiftModel.getAllWorkShift()
    .then(data => {
      return res.status(200).json({ allProductType: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xoa user
exports.deleteWorkShift = async(req, res) => {
  const workShiftId = req.params.id
  WorkShiftModel.deleteWorkShift(workShiftId)
    .then(data => {
      return res.status(200).json({ message: 'Xóa thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Bạn không thể xóa vì các sản phẩm đang dùng loại này" })
    })
}
// sua user
exports.updateWorkShift = async(req, res) => {
  const workShiftId = req.params.id
  const workShift = req.body;
  workShift.date = new Date(workShift.date);
  workShift.user_id = req.userId;
  WorkShiftModel.updateWorkShift(workShiftId, workShift)
    .then(data => {
      return res.status(200).json({ message: 'Sửa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống" })
    })
}
//tao moi user
exports.createNewWorkShift = (req, res) => {
  const workShift = req.body;
  workShift.date = new Date(workShift.date);
  workShift.user_id = req.userId;

  WorkShiftModel.createNewWorkShift(workShift)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// diem danh
exports.diemDanh = async(req, res) => {
  const workShiftId = req.params.id
  const workShift = req.body;
  WorkShiftModel.diemDanh(workShiftId, workShift)
    .then(data => {
      return res.status(200).json({ message: 'Cập nhật ca làm thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống" })
    })
}
