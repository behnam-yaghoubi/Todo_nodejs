import db from "../db/models/";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, Msg } from "../config/constants";
import {
  catchError,
  loginHandle,
  successHandle,
  loginValidation,
} from "../utils";

export default {
  /**
   * @function user register
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Object} req.body The JSON payload.
   */
  async registerController(req, res) {
    try {
      const { userName, email, password } = req.body;
      const alreadyExistUser = await db.UserModel.findOne({
        where: {
          email,
        },
      });
      if (alreadyExistUser) {
        return successHandle(res, 400, "error", Msg.duplicate);
      }
      const result = await db.UserModel.create({
        userName,
        email,
        password,
      });
      successHandle(res, 201, "success", Msg.Register, result);
    } catch (error) {
      catchError(res, error);
    }
  },

  /**
   * @function user login
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Object} req.body The JSON payload.
   */
  async loginController(req, res) {
    try {
      const { email, password } = req.body;
      const user = await db.UserModel.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        loginHandle(res, 400, "error", "", Msg.loginUserNotFound, "/login");
      } else {
        await bcrypt.compare(password, user.password, (err, isMatch) => {
          if (isMatch && !err) {
            let userEmail = user.email;
            const token = jwt.sign(user.toJSON(), JWT_SECRET, {
              expiresIn: "1h",
            });
            let Token = `jwt ${token}`;
            loginHandle(res, 200, "success", Token, Msg.loginSuccess, "/Todo");
          } else {
            loginHandle(res, 400, "error", "", Msg.passwordIncorrect, "/login");
          }
        });
      }
    } catch (error) {
      catchError(res, error);
    }
  },
};
