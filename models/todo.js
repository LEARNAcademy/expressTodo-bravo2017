'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    listId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.List,{
                  foreignKey: 'listId',
                  onDelete: 'CASCADE'
                })
      }
    }
  });
  return Todo;
};
