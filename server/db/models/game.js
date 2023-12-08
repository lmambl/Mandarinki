const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'ktoId' });
      this.belongsTo(User, { foreignKey: 'komuId' });
    }
  }
  Game.init(
    {
      ktoId: {
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
      komuId: {
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
