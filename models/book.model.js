const Model = require("sequelize").Model;
const DataTypes = require("sequelize").DataTypes;
module.exports = function Book(sequelize) {
  class Book extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        through: "book_category",
        foreignKey: "bookId",
        as: "categories",
        otherKey: "categoryId",
      });
      this.hasMany(models.BookDetail, {
        foreignKey: "bookId",
        as: "bookDetails",
      });
      this.belongsTo(models.Author, {
        foreignKey: "authorId",
        as: "author",
      });
      this.belongsToMany(models.UploadFile, {
        through: "book_upload",
        foreignKey: "bookId",
        as: "uploadFiles",
        otherKey: "mediaId",
      });
      this.belongsTo(models.User, {
        foreignKey: "ownerId",
        as: "user",
      });
    }
  }
  Book.init(
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
      isNew: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isHot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
      tableName: "book",
      timestamps: true,
    }
  );
  return Book;
};
