import ImageModel from '../model/image.model';

// xua ly logic lay tat ca tran saction
exports.createNewImageProduct = (req, res) => {
  ImageModel.createNewImageProduct()
    .then(data => {
      return res.status(200).json({ allTransaction: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
