
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
