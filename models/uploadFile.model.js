const sequelize = require("sequelize");
const Model = sequelize.Model;
const DataTypes = sequelize.DataTypes;
module.exports = function UploadFile(sequelize) {
  class UploadFile extends Model {
    static associate(models) {
      this.belongsToMany(models.Book, {
        through: "book_upload",
        foreignKey: "mediaId",
        as: "books",
        otherKey: "bookId",
      });
      this.belongsTo(models.User, {
        foreignKey: "ownerId",
        as: "user",
      });
    }
  }
  UploadFile.init(
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
      thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "UploadFile",
      tableName: "upload_file",
      timestamps: true,
    }
  );
  return UploadFile;
}
