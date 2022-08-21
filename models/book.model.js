"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Book(sequelize) {
    class Book extends sequelize_1.Model {
        static associate(models) {
            this.belongsToMany(models.Category, {
                through: "book_category",
                foreignKey: "bookId",
                as: "categories",
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
    Book.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
        },
        about: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
        },
        isNew: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isHot: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
