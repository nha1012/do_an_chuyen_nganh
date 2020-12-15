
import db from './db';
// get all product
exports.getAllProduct = () => {
  const query = `SELECT product.id, product.name, product.price, product.description, product.type_id, product_type.name as product_type FROM product INNER JOIN product_type ON product.type_id=product_type.id;`
  return new Promise((resolve, reject) => {
    try {
      db.query(query, '', (err, result) => {
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
// lay thong tin thong ke san pham
exports.getDataThongKeSanPham = (productId) => {
  const query = `SELECT product.name, product.price, orders.amount FROM product INNER JOIN orders ON product.id = orders.product_id`;
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
