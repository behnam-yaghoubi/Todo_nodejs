"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todo", [
      {
        userId: "1",
        todoName: "todo1",
        Condition: "incomplete",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        todoName: "todo2",
        Condition: "incomplete",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        todoName: "todo3",
        Condition: "incomplete",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        todoName: "todo4",
        Condition: "incomplete",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todo", null, {});
  },
};
