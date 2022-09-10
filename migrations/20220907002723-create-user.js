'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fantasy_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cnpj_cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      access_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pix_key: {
        type: Sequelize.STRING,
        allowNull: true
      },
      photo_path: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      account_confirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      account_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
