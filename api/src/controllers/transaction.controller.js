import TransactionModel from '../model/transaction.model';

// xua ly logic lay tat ca tran saction
exports.getAllTransaction = (req, res) => {
  TransactionModel.getAllTransaction()
    .then(data => {
      return res.status(200).json({ allTransaction: data })
    })
    .catch(err => {
      return res.status(500).json({ message: "Lỗi hệ thống!" })
    })
}
