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
    return queryInterface.bulkInsert('Todos', [{
      listId: 1,
      description: 'meet with Rob',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      listId: 3,
      description: 'taco time',
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      listId: 1,
      description: 'starbucks run',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
