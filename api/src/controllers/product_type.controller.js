

import ProductTypeModel from '../model/product_type.model';
// xua ly logic lay tat ca product type
exports.getAllProductType = (req, res) => {
  ProductTypeModel.getAllTypeProduct()
    .then(data => {
      return res.status(200).json({ allProductType: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}

// xoa user
exports.deleteProductType = async(req, res) => {
  const productTypeId = req.params.id
  ProductTypeModel.deleteProductType(productTypeId)
    .then(data => {
      return res.status(200).json({ message: 'Xóa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Bạn không thể xóa vì các sản phẩm đang dùng loại này" })
    })
}
// sua user
exports.updateProductType = async(req, res) => {
  const productTypeId = req.params.id
  const productType = req.body
  ProductTypeModel.updateProductType(productTypeId, productType)
    .then(data => {
      return res.status(200).json({ message: 'Sửa thành công' })
    })
    .catch(err => {
      return res.status(500).json({ message: "Bạn không thể sửa ID vì các sản phẩm đang dùng loại này" })
    })
}
//tao moi user
exports.createNewProductType = (req, res) => {
  const productType = req.body
  ProductTypeModel.createNewProductType(productType)
    .then(data => {
      return res.status(200).json({ message: 'Thêm thành công' })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
