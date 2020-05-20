"use strict";
const bcrypt = require("bcryptjs");
const { dbMsgError } = require("../../config/constants");

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    "UserModel",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: dbMsgError("یوزر").NotNullField },
          min(value) {
            if (value.length < 5 && value !== "") {
              throw new Error(dbMsgError("یوزر", 5).LessThan);
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: dbMsgError("ایمیل").NotNullField },
          isEmail(value) {
            let regex = /^\S+@\S+$/;
            if (!regex.test(value) && value.length !== 0) {
              throw new Error(dbMsgError("ایمیل").FormatValidation);
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: dbMsgError("پسورد").NotNullField },
          min(value) {
            if (value.length < 6 && value !== "") {
              throw new Error(dbMsgError("پسورد", 6).LessThan);
            }
          },
        },
      },
    },
    {
      timestamps: true,
      tableName: "UserModels",
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
  UserModel.associate = function (models) {
    // associations can be defined here
    UserModel.hasMany(models.TodoModel, { onDelete: "CASCADE", hooks: true });
  };
  return UserModel;
};
