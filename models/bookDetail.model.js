const Model = require("sequelize").Model;
const DataTypes = require("sequelize").DataTypes;
module.exports = function BookDetail(sequelize) {
  class BookDetail extends Model {
    static associate(models) {
      this.belongsTo(models.Book, {
        foreignKey: "bookId",
        as: "book",
      });
      this.belongsTo(models.User, {
        foreignKey: "ownerId",
        as: "user",
      });
    }
  }
  BookDetail.init(
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
      price: {
        type: DataTypes.INTEGER,
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
      modelName: "BookDetail",
      tableName: "bookDetail",
      timestamps: true,
    }
  );
  return BookDetail;
}
