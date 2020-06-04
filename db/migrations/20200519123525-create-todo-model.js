"use strict";
const { dbMsgError } = require("../../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("TodoModels", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        UserModelId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "UserModels",
            key: "id",
          },
        },
        todoName: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: { msg: dbMsgError("فعالیت").NotNullField },
            min(value) {
              if (value.length < 3 && value !== "") {
                throw new Error(dbMsgError("فعالیت", 3).LessThan);
              }
            },
          },
        },
        Condition: {
          type: Sequelize.ENUM,
          values: ["done", "doing", "incomplete"],
          defaultValue: "incomplete",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.addIndex("TodoModels", ["todoName"]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TodoModels").then(() => {
      queryInterface.removeIndex("TodoModels", ["todoName"]);
    });
  },
};
