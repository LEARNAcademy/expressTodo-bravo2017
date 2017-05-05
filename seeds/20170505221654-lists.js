'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Lists', [{
      event: "Home Todos",
      time: "15:00",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      event: "Work Todos",
      time: "12:30 am",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      event: "Fun Todos",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lists', null, {})
  }
};
