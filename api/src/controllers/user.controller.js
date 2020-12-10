
import UserModel from '../model/user.model';
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
