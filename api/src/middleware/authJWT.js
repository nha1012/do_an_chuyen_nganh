import { verify } from "jsonwebtoken";
import { secret } from "../config/auth.config.js";
import UserModel from '../model/user.model';
import UserRole from '../model/user-role.model';
import Role from '../model/role.model';

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
    next();
  });
};

let isAdmin =async (req, res, next) => {
  let userRoleId = await UserRole.getUserRoleByIdUser(req.userId);
  if (userRoleId.length > 0){
    userRoleId = userRoleId[0].role_id;
    Role.getRoleById(userRoleId)
    .then(value=>{
      if(value[0].id === 1){
        next();
        return;
      }
      res.status(403).send({ message: "Admin mới có quyền này" });
      return;
    })
    .catch(err=>{
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    })
  }
  return res.status(403).send({ message: "Admin mới có quyền này" });

};

module.exports = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};
