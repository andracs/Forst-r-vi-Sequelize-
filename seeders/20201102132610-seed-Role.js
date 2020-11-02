"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          type: "Student",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          type: "Company",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          type: "Administrator",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
