
import UserModel from '../model/user.model';
import _ from 'lodash'
// xua ly logic lay tat ca user
exports.login = (req, res) => {
  const userLogin = req.body
  UserModel.getUserLogin(userLogin)
    .then(data => {
      if (!_.isEmpty(data)) {
        return res.status(200).json({ user: data })
      }
      return res.status(201).json({ message: "Sai tài khoản hoặc mật khẩu!" })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
