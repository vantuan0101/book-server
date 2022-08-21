"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Author(sequelize) {
    class Author extends sequelize_1.Model {
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
    Author.init({
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
        total: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
