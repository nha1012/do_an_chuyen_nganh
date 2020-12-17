
import db from './db';
// get type role theo user id
exports.getUserRoleByIdUser = (userId) => {
  const query = `SELECT * FROM user_roles WHERE user_id=${userId}`
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
// delete type role theo user id
exports.deleteUserRoleByIdUser = (userId) => {
  const query = `DELETE FROM user_roles WHERE user_id=${userId}`
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

// create user Role
exports.createUserRole = (userId, roleId) => {
  let userRole = {
    user_id: userId,
    role_id: roleId
  }
  const query = `INSERT INTO user_roles set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, userRole, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
