"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        userName: "user1",
        email: "user1@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "user2",
        email: "user2@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
