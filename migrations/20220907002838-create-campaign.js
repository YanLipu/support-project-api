'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('campaign', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      goal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount_raised: {
        type: Sequelize.STRING,
        allowNull: false
      },
      monthly_cost: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true
      },
      verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      sponsors: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photos_path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      videos_path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('campaign')
  }
}
