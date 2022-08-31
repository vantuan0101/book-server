const Model = require("sequelize").Model;
const DataTypes = require("sequelize").DataTypes;

module.exports = function Author(sequelize) {
  class Author extends Model {

    static associate(models) {
      this.hasMany(models.Book, {
        foreignKey: "authorId",
        as: "books",
      });
      this.belongsTo(models.User, {
        foreignKey: "ownerId",
        as: "user",
      });
    }
  }
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      about: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Author",
      tableName: "Author",
      timestamps: true,
    }
  );
  return Author;
}
