
import db from './db';

exports.getAllKhuyenMai = () => {
  const query = `SELECT * FROM khuyen_mai;`
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
exports.createNewKhuyenMai = (nhaCungCap) => {
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
exports.updateKhuyenMai = (nhaCungCapId, nhaCungCap) => {
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
exports.deleteKhuyenMai = (nhaCungCapId) => {
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
