'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('category_campaign', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_campaign: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'campaign',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      },
      id_category: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categories',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('category_campaign')
  }
}
