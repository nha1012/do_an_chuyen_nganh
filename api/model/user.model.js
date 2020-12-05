
import db from './db';
// get all user
exports.getAllUser = () => {
  const query = `SELECT id_user, user_name, full_name, permmision, email FROM user`
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
  const query = `SELECT id_user, user_name, full_name, permmision, email FROM user WHERE user_name = '${user.userName}' and password = '${user.password}'`
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
