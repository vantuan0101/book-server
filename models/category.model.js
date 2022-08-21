"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Category(sequelize) {
    class Category extends sequelize_1.Model {
        static associate(models) {
            Category.hasMany(models.Book, {
                foreignKey: "rootCategoryId",
                as: "booksRootCategory",
            });
            Category.belongsToMany(models.Book, {
                through: "BookCategory",
                as: "books",
                foreignKey: "categoryId",
                otherKey: "bookId",
            });
        }
    }
    Category.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Category",
        tableName: "category",
        timestamps: true,
    });
    return Category;
}
exports.default = Category;
