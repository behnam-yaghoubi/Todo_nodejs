import { User } from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, Msg } from "../config/constants";
import { catchError, loginHandle, successHandle } from "../utils";

export default {
  async registerController(req, res) {
    try {
      const { userName, email, password } = req.body;
      const result = await User.create({
        userName,
        email,
        password,
      });
      successHandle(res, 201, "success", Msg.Register, result);
    } catch (error) {
      catchError(res, error);
    }
  },
  async loginController(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        loginHandle(res, "error", "", Msg.loginUserNotFound, "/login");
      } else {
        await bcrypt.compare(password, user.password, (err, isMatch) => {
          if (isMatch && !err) {
            let userEmail = user.email;
            const token = jwt.sign(user.toJSON(), JWT_SECRET, {
              expiresIn: "1h",
            });
            let Token = `jwt ${token}`;
            loginHandle(res, "success", Token, Msg.loginSuccess, "/Todo");
          } else {
            loginHandle(res, "error", "", Msg.passwordIncorrect, "/login");
          }
        });
      }
    } catch (error) {
      catchError(res, error);
    }
  },
};
