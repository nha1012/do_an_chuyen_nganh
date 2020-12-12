
import UserModel from '../model/user.model';
import UserRoleModel from '../model/user-role.model';
// xua ly logic lay tat ca user
exports.getAllUser = (req, res) => {
  UserModel.getAllUser()
    .then(data => {
      return res.status(200).json({ allUser: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// xoa user
exports.deleteUser = async(req, res) => {
  const userId = req.params.id
  await UserRoleModel.deleteUserRoleByIdUser(userId)
  UserModel.deleteUser(userId)
    .then(data => {
      return res.status(200).json({ message: 'Xóa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// sua user
exports.updateUser = async(req, res) => {
  const userId = req.params.id
  const user = req.body
  UserModel.updateUser(userId, user)
    .then(data => {
      return res.status(200).json({ message: 'Sửa thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
//tao moi user
exports.createNewUser = (req, res) => {
  const user = req.body
  UserModel.createNewUser(user)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
