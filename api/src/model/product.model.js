
import db from './db';
// get all product
exports.getAllProduct = (user) => {
  const query = `SELECT * FROM product`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, user, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}

// create product
exports.createNewProduct = (product) => {
  const query = `INSERT INTO product set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, product, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// update user
exports.updateProduct = (productId, product) => {
  const query = `UPDATE product set ? WHERE id = '${productId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, product, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// delete product by id
exports.deleteProduct = (productId) => {
  const query = `DELETE FROM product WHERE id = '${productId}'`
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
