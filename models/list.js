'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    event: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return List;
};