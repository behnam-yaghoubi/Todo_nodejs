import { DataTypes } from "sequelize";
import { sequelize } from ".";

import bcrypt from "bcryptjs";

export const User = sequelize.define(
  "Users",
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

// User.prototype.validPassword = async (password) => {
//   return await bcrypt.compare(password, this.password);
// };
