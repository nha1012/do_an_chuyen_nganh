import express from 'express';
import workShiftController from '../controllers/work_shift.controller'
const authJwt = require("../middleware/authJWT");
let workShiftRouter = express.Router();
workShiftRouter
  .get('/', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.getAllWorkShift)
  .get('/user', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.getWorkShiftByIdUser)
  .delete('/:id', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.deleteWorkShift)
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.createNewWorkShift)
  .put('/:id', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.updateWorkShift)
  .patch('/:id', [authJwt.verifyToken, authJwt.isEmployee], workShiftController.diemDanh)
module.exports = workShiftRouter;
