import { User } from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, Msg } from "../config/constants";
import {
  catchError,
  loginHandle,
  successHandle,
  loginValidation,
} from "../utils";
import { loginValidate, Validate } from "../utils/joiValidate";
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
      const { error } = Validate(req.body);
      if (error) {
        return successHandle(res, 400, "error", error.details);
      }
      const alreadyExistUser = await User.findOne({
        where: {
          email,
        },
      });
      if (alreadyExistUser) {
        return successHandle(res, 400, "error", Msg.duplicate);
      }
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

  /**
   * @function user login
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Object} req.body The JSON payload.
   */
  async loginController(req, res) {
    try {
      const { email, password } = req.body;
      const { error } = loginValidate(req.body);
      if (error) {
        return loginValidation(res, 400, "error", "", error.details, "/login");
      }
      const user = await User.findOne({
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
