"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Book(sequelize) {
    class Book extends sequelize_1.Model {
        static associate(models) {
            Book.hasMany(models.BookDetail, {
                foreignKey: "bookId",
                as: "bookDetails",
            });
            Book.belongsTo(models.Category, {
                foreignKey: "rootCategoryId",
                as: "category",
            });
            Book.belongsToMany(models.Category, {
                through: "BookCategory",
                as: "categories",
                foreignKey: "bookId",
                otherKey: "categoryId",
            });
            Book.belongsTo(models.Author, {
                foreignKey: "authorId",
                as: "author",
            });
        }
    }
    Book.init({
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
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        about: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Book",
        tableName: "book",
        timestamps: true,
    });
    return Book;
}
exports.default = Book;
