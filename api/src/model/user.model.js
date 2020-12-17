
import db from './db';
// create customers
exports.createNewEmployee = (user) => {
  const query = `INSERT INTO users set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, user, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
exports.createNewUser = (user) => {
  const query = `INSERT INTO users set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, user, (err, result) => {
        if (err) throw err;
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// update user
exports.updateUser = (userId, user) => {
  const query = `UPDATE users set ? WHERE id = '${userId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, user, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// get all user
exports.getAllCustomer = () => {
  const query = `SELECT * FROM users INNER JOIN user_roles ON users.id = user_roles.user_id AND user_roles.role_id > 2`;
  return new Promise((resolve, reject) => {
    try {
      db.query(query, "", (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// lay tat ca cac nhan vien
exports.getNhanVien = () => {
  const query = `SELECT * FROM users INNER JOIN user_roles ON users.id = user_roles.user_id AND user_roles.role_id <= 2`;
  return new Promise((resolve, reject) => {
    try {
      db.query(query, "", (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// get user
exports.getUserLogin = (user) => {
  const query = `SELECT id, username, fullname, email FROM users WHERE username = '${user.userName}' and password = '${user.password}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// get user by id
exports.getUserById = (userId) => {
  const query = `SELECT id, username, fullname, email FROM users WHERE id = '${userId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// delete user by id
exports.deleteUser = (userId) => {
  const query = `DELETE FROM users WHERE id = '${userId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
