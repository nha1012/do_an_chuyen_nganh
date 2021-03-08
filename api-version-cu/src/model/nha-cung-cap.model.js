
import db from './db';

// // get work shif by id user
// exports.getWorkShiftByIdUser = (userId) => {
//   const query = `SELECT * FROM work_shift WHERE user_id = ?`
//   return new Promise((resolve, reject) => {
//     try {
//       db.query(query, userId, (err, result) => {
//         if (err) reject(err)
//         resolve(result)
//       })
//     } catch (error) {
//       if (error) reject(error)
//     }
//   });
// }
// get all type product
exports.getAllNhaCungCap = () => {
  const query = `SELECT * FROM nha_cung_cap;`
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
// create
exports.createNewNhaCungCap = (nhaCungCap) => {
  const query = `INSERT INTO nha_cung_cap set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, nhaCungCap, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// update
exports.updateNhaCungCap = (nhaCungCapId, nhaCungCap) => {
  const query = `UPDATE nha_cung_cap set ? WHERE id = '${nhaCungCapId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, nhaCungCap, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// delete
exports.deleteNhaCungCap = (nhaCungCapId) => {
  const query = `DELETE FROM nha_cung_cap WHERE id = '${nhaCungCapId}'`
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
