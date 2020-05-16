import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import Joi from "@hapi/joi";
const bcrypt = require("bcryptjs");

export const User = sequelize.define(
  "user",
  {
    id: {
      // allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      // field:'id'
    },
    userName: {
      type: DataTypes.STRING,
      // field:'userName'
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      // field:'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // field:'password'
    },
  },
  {
    // timestamps:true,
    freezeTableName: true,
    hooks: {
      beforeCreate: async (user, option) => {
        // crypt user password
        ///////////////////////////////////////////// sol 1
        // return bcrypt.hash(user.password , 10)
        //     .then(hash =>{
        //         user.password = hash
        //     })
        //     .catch(err => {
        //         throw new Error();
        //     })
        ///////////////////////////////////////////// sol 2
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        /////////////////////////////////////////////
      },
    },
  }
);
export const Validate = (model) => {
  const schema = Joi.object({
    userName: Joi.string().required().min(5).messages({
      "string.empty": "فیلد نام کاربری نمی تواند خالی باشد",
      "string.min": "حداقل طول نام کاربر 5 کاراکتر است",
    }),
    email: Joi.string().required().email().messages({
      "string.empty": "فیلد ایمیل نمی تواند خالی باشد",
      "string.email": "فرمت ایمیل وارد شده صحیح نیست",
    }),
    password: Joi.string().required().min(6).messages({
      "string.empty": "فیلد پسورد نمی تواند خالی باشد",
      "string.min": "پسورد نباید کمتر از 6 کاراکتر باشد",
    }),
  }).options({ abortEarly: false });
  return schema.validate(model);
};

User.prototype.validPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};
