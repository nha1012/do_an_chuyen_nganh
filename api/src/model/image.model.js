import db from './db';
// get work shif by id user
exports.createNewImageProduct = (data) => {
  const query = `INSERT INTO image_product set = ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, data, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
