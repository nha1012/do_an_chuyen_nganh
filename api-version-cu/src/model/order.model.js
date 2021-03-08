import db from './db';
// get thong tin nguoi dung mua hang
exports.getThongTinMuaHang = (userId) => {
  const query = `SELECT orders.qty, orders.amount, product.name, product.price FROM orders INNER JOIN transaction ON orders.transaction_id = transaction.id INNER JOIN product ON product.id = orders.product_id WHERE transaction.user_id =?`
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
