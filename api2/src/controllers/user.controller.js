
import UserModel from '../model/user.model';
import UserRoleModel from '../model/user-role.model';
// getCustomerList
exports.getCustomerList = (req, res) => {
  UserModel.getCustomerList()
    .then(data => {
      return res.status(200).json({ allUser: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// get user by id
exports.getUserById = (req, res) => {
  const userId = req.params.id
  UserModel.getUserById(userId)
    .then(data => {
      return res.status(200).json({ user: data })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xua ly logic lay tat ca user
exports.getAllCustomer = (req, res) => {
  UserModel.getAllCustomer()
    .then(data => {
      return res.status(200).json({ allUser: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// lay tat ca nhan vien
exports.getNhanVien = (req, res) => {
  UserModel.getNhanVien()
    .then(data => {
      return res.status(200).json({ allUser: data })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xoa user
exports.deleteUser = async (req, res) => {
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
exports.updateUser = async (req, res) => {
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
  let roleId = undefined;
  if (req.isAdmin)
    roleId = 2;
  else {
    roleId = 3;
  }
  const user = req.body
  UserModel.createNewUser(user)
    .then(async data => {
      UserRoleModel.createUserRole(data.insertId, roleId)
        .then(userRole => {
          return res.status(200).json({ message: 'Thêm thành công' })
        })
        .catch(err => {
          UserModel.deleteUser(data.insertId)
            .then(data => {
              return res.status(200).json({ message: 'Thêm thất bại' })
            })
            .catch(err => {
              return res.status(500).json({ message: "Lỗi hệ thống!" })
            })
        })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
