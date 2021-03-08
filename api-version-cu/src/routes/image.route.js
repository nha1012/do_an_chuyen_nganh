import express from 'express';
import imageController from '../controllers/image.controller'
const authJwt = require("../middleware/authJWT");
let imageRouter = express.Router();
imageRouter
  .post('/', [authJwt.verifyToken, authJwt.isEmployee], imageController.createNewImageProduct)
module.exports = imageRouter;
