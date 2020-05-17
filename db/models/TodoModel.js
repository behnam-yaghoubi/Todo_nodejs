import { DataTypes } from "sequelize";
import { sequelize } from ".";

export const Todo = sequelize.define(
  "Todo",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      // field:'id'
    },
    userId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "user",
      //   key: "id",
      // },
    },
    todoName: {
      type: DataTypes.STRING,
      unique: true,
    },
    Condition: {
      type: DataTypes.ENUM,
      values: ["done", "doing", "incomplete"],
      defaultValue: "incomplete",
    },
  },
  {
    freezeTableName: true,
  }
);
Todo.associate = (models) => {
  User.hasMany(models.Todo, { foreignKey: "userId" });
  Todo.belongsTo(models.User, { foreignKey: "userId" });
};
