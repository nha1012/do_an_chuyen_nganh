
import UserModel from '../model/user.model';
import { secret } from '../config/auth.config';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
// xua ly logic lay tat ca user
exports.login = (req, res) => {
  const userLogin = req.body
  let user = {}
  UserModel.getUserLogin(userLogin)
    .then(data => {
      if (!_.isEmpty(data)) {
        user = {
          userId:data[0].id,
          fullName:data[0].fullname,
          userName: data[0].username,
          email: data[0].email
        }
        var token = jwt.sign(user, secret, { expiresIn: "24h" }); // alive 24h
        return res.send({ token });
      }
      return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
