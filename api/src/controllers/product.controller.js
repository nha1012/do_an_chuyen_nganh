
import ProductModel from '../model/product.model';
// xua ly logic lay tat ca user
exports.getAllProduct = (req, res) => {
  ProductModel.getAllProduct()
    .then(data => {
      return res.status(200).json({ allProduct: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// lay thong tin thong ke san pham
exports.getDataThongKeSanPham = (req, res) => {
  ProductModel.getDataThongKeSanPham()
    .then(data => {
      return res.status(200).json({ allProduct: data })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// xoa user
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id
  ProductModel.deleteProduct(productId)
    .then(data => {
      return res.status(200).json({ message: 'Xóa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
// sua user
exports.updateProduct = async (req, res) => {
  const productId = req.params.id
  const product = req.body
  ProductModel.updateProduct(productId, product)
    .then(data => {
      return res.status(200).json({ message: 'Sửa thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
//tao moi user
exports.createNewProduct = (req, res) => {
  const product = req.body
  ProductModel.createNewProduct(product)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
exports.getSanPhamTrongKho = (req, res) => {
  ProductModel.getSanPhamTrongKho()
    .then(data => {
      return res.status(200).json({ products: data })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
