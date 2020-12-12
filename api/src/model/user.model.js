
import db from './db';
// get all user
exports.getAllUser = () => {
  const query = `SELECT * FROM users`
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
