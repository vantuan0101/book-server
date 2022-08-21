"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function User(sequelize) {
    class User extends sequelize_1.Model {
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
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        phoneNumber: {
            type: sequelize_1.DataTypes.STRING(13),
            allowNull: false,
        },
        role: {
            type: sequelize_1.DataTypes.STRING(5),
            allowNull: false,
            defaultValue: "user",
        },
        address: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: true,
    });
    return User;
}
exports.default = User;
