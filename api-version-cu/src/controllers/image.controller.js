import ImageModel from '../model/image.model';
import multer from 'multer';
import path from 'path';
// xua ly logic lay tat ca tran saction
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/public/image');
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});
// Treat posted file
var upload = multer({ storage: storage }).single("file");

exports.createNewImageProduct = (req, res) => {
  upload(req, res, (err) =>{
    if (err) {
      return res.status(500);
    }
  if(req.file){
    const fileName = `http://localhost:3000/${req.file.filename}`;
    const data = {
      product_id:req.body.id,
      url: fileName
    }
    ImageModel.createNewImageProduct(data)
    .then(data => {
      return res.status(200).json({ message: "Tải hình ảnh thành công"})
     })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })}
  });
}
