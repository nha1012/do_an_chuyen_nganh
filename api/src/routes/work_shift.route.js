import express from 'express';
import workShiftController from '../controllers/work_shift.controller'
const authJwt = require("../middleware/authJWT");
let workShiftRouter = express.Router();
workShiftRouter
  .get('/', authJwt.verifyToken, workShiftController.getAllWorkShift)
  .get('/user', authJwt.verifyToken, workShiftController.getWorkShiftByIdUser)
  .delete('/:id', [authJwt.verifyToken], workShiftController.deleteWorkShift)
  .post('/', [authJwt.verifyToken], workShiftController.createNewWorkShift)
  .put('/:id', [authJwt.verifyToken], workShiftController.updateWorkShift)
module.exports = workShiftRouter;
