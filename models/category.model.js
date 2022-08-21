const Model = require("sequelize").Model;
const DataTypes = require("sequelize").DataTypes;

module.exports = function Category(sequelize) {
  class Category extends Model {

    static associate(models) {
      this.belongsToMany(models.Book, {
        through: "book_category",
        foreignKey: "categoryId",
        as: "books",
      });
      this.hasMany(models.Category, {
        foreignKey: "parentId",
        as: "children",
      });
      this.belongsTo(models.Category, {
        foreignKey: "parentId",
        as: "parent",
      });
    }
  }
  Category.init(
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
      detail: {
        type: DataTypes.JSON,
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
      modelName: "Category",
      tableName: "category",
      timestamps: true,
    }
  );
  return Category;
}
