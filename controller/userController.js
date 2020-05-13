const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
module.exports = {
  async registerController(req, res) {
    try {
      const { userName, email, password } = req.body;
      const result = await User.create({
        userName,
        email,
        password,
      });
      res.status(201).send({
        status: "success",
        msg: "ثبت نام شما انجام شد",
        result,
      });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
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
        return res.status(401).send({
          status: "error",
          token: {},
          msg: "کاربری با این مشخصات وجود ندارد",
          redirect: "/login",
        });
      } else {
        await bcrypt.compare(password, user.password, (err, isMatch) => {
          if (isMatch && !err) {
            let userEmail = user.email;
            const token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: "1h",
            });
            return res.status(200).send({
              status: "success",
              token: `jwt ${token}`,
              msg: "شما با موفقیت وارد شدید.",
              redirect: "/Todo",
            });
          } else {
            res.status(401).send({
              status: "error",
              token: {},
              msg: "پسورد اشتباه است",
              redirect: "/login",
            });
          }
        });
      }
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
};
