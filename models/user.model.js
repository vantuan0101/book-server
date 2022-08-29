const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const DataTypes = Sequelize.DataTypes;

module.exports = function User(sequelize) {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.UploadFile, {
        foreignKey: "ownerId",
        as: "uploadFiles",
      });
      this.hasOne(models.Author, {
        foreignKey: "ownerId",
        as: "author",
      });
      this.hasMany(models.BookDetail, {
        foreignKey: "ownerId",
        as: "bookDetails",
      });
      this.hasMany(models.Book, {
        foreignKey: "ownerId",
        as: "books",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: "user",
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: true,
    }
  );
  return User;
};
