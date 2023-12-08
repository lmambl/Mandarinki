/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Avatars',
      [
        {
          url: '/img/год-дракона.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/конфета.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/новогодняя-елка.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
