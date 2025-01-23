'use strict';
module.exports = {
  
  async up (queryInterface, Sequelize) {
    await queryInterface.update('Usuarios', [
      { name: 'Vitor Silva' },
      {
        where: {
          id: 1,
        },
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
};
