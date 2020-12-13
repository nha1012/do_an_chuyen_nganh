
import db from './db';
// get all type product
exports.getAllTypeProduct = () => {
  const query = `SELECT * FROM product_type`
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
exports.createNewProductType = (productType) => {
  const query = `INSERT INTO product_type set ?`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, productType, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// update
exports.updateProductType = (productTypeId, productType) => {
  const query = `UPDATE product_type set ? WHERE id = '${productTypeId}'`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, productType, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } catch (error) {
      if (error) reject(error)
    }
  });
}
// delete
exports.deleteProductType = (productTypeId) => {
  const query = `DELETE FROM product_type WHERE id = '${productTypeId}'`
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
