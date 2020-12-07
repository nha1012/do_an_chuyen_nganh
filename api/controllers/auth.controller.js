
import UserModel from '../model/user.model';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
// xua ly logic lay tat ca user
exports.login = (req, res) => {
  const userLogin = req.body
  UserModel.getUserLogin(userLogin)
    .then(data => {
      if (!_.isEmpty(data)) {
        var token = jwt.sign({ userID: userLogin.id }, 'Ma-bao-mat-quan-ly-giay', { expiresIn: '2h' });
        return res.send({ token });
      }
      return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
