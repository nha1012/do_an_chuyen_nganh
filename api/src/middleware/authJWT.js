import { verify } from "jsonwebtoken";
import { secret } from "../config/auth.config.js";
import UserRole from '../model/user-role.model';

let verifyToken = (req, res, next) => {
  let token = req.headers["access_token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.userId;
    return next();
  });
};

let isEmployee = async (req, rest, next) => {
  UserRole.getUserRoleByIdUser(req.userId)
    .then(value => {
      if (value[0].role_id === 2 || value[0].role_id === 1) {
        next();
        return;
      }
    })
    .catch(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    })
};

let isAdmin = async (req, res, next) => {
  UserRole.getUserRoleByIdUser(req.userId)
    .then(value => {
      if (value[0].role_id === 1) {
        req.isAdmin = true;
        next();
        return;
      }
    })
    .catch(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    })
};

module.exports = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isEmployee: isEmployee
};
