"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Author(sequelize) {
    class Author extends sequelize_1.Model {
        static associate(models) {
            Author.hasMany(models.Book, {
                foreignKey: "authorId",
                as: "books",
            });
        }
    }
    Author.init({
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
        totalBooks: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: "Author",
        tableName: "Author",
        timestamps: true,
    });
    return Author;
}
exports.default = Author;
