"use strict";
const { dbMsgError } = require("../../config/constants");

module.exports = (sequelize, DataTypes) => {
  const TodoModel = sequelize.define(
    "TodoModel",
    {
      todoName: {
        type: DataTypes.STRING,
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
        type: DataTypes.ENUM,
        values: ["done", "doing", "incomplete"],
        defaultValue: "incomplete",
      },
    },
    {
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ["todoName"],
        },
      ],
    }
  );
  TodoModel.associate = function (models) {
    // associations can be defined here
    TodoModel.belongsTo(models.UserModel, { foreignKey: "UserModelId" });
  };
  return TodoModel;
};
