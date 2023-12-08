const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Avatar, Game }) {
      this.belongsTo(Avatar, { foreignKey: 'avatarId' });
      this.hasMany(Game, { foreignKey: 'ktoId' });
      this.hasMany(Game, { foreignKey: 'komuId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avatarId: {
        allowNull: false,
        references: { model: 'Avatars', key: 'id' },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      dreams: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
