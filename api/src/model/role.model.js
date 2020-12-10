
import db from './db';
// get all user
exports.getRoleById = (roleId) => {
  const query = `SELECT * FROM roles WHERE id=${roleId}`
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
