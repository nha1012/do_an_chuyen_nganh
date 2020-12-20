
import db from './db';
// get work shif by id user
exports.getTransactionById = (userId) => {
  const query = `SELECT * FROM transaction WHERE user_id = ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, userId, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// get all type product
exports.getAllTransaction = () => {
  const query = `SELECT * FROM transaction`
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
exports.createNewWorkShift = (workShift) => {
  const query = `INSERT INTO work_shift set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, workShift, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// update
exports.updateWorkShift = (workShiftId, workShift) => {
  const query = `UPDATE work_shift set ? WHERE id = '${workShiftId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, workShift, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// delete
exports.deleteWorkShift = (workShiftId) => {
  const query = `DELETE FROM work_shift WHERE id = '${workShiftId}'`
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
