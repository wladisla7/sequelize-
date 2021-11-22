'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        field: 'productName',
        allowNull: false,
        type: Sequelize.STRING
      },
      custumerId: {
        field: 'custumerId',
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      isSent: {
        field: 'isSent',
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sentDate: {
        field:"sentDate",
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        field:'createdAt',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updatedAt',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};