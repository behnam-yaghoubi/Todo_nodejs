"use strict";
const { dbMsgError } = require("../../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserModels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("UserModels");
  },
};
