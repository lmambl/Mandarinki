/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
        {
          url: '/img/подарок.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/пряничный-человечек.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/рождественский-бал.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/санта.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/снеговик.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/снегурочка.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/фейерверк.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Avatars', null, {});
  },
};
