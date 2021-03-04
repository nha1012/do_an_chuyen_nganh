
import db from './db';
exports.createTable = () =>{
  // const query = "DROP TABLE work_shift"
  const query = "create table orders(id int auto_increment,amount double precision not null,price double precision not null,quanity int not null,order_day datetime not null,product_id int not null,user_id bigint(20) not null,status varchar(100),PRIMARY KEY(id),FOREIGN KEY (product_id) REFERENCES product(id),FOREIGN KEY (user_id) REFERENCES users(id));"
  // const query = "CREATE TABLE work_shift( id int auto_increment,ca_lam varchar(255) NOT NULL,ghi_chu varchar(255),status boolean DEFAULT false, date Date, user_id bigint(20),PRIMARY KEY (id),FOREIGN KEY (user_id) REFERENCES users(id));"
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
// get work shif by id user
exports.getWorkShiftByIdUser = (userId) => {
  const query = `SELECT * FROM work_shift WHERE user_id = ?`
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
exports.getAllWorkShift = () => {
  const query = `SELECT work_shift.id, work_shift.ca_lam, work_shift.date, work_shift.ghi_chu,work_shift.status, users.fullname FROM work_shift INNER JOIN users ON users.id=work_shift.user_id`
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
// diem danh ca lam
exports.diemDanh = (workShiftId, data) => {
  const query = `UPDATE work_shift set ? WHERE id = '${workShiftId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query,data, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
