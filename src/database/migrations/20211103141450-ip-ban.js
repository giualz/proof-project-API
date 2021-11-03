'use strict';

const tableName = 'ip-ban'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      ipNumber: {
        type: Sequelize.STRING,
        allowNull: false
      }

    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable(tableName);

  }
};
